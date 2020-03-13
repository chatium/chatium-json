import { types } from 'util'

import { ChatiumScreen } from '../Screen'
import { WithKey } from './commonTypes'

type SlotTarget = 'left' | 'right'
export type SlotsProps = Record<string, SlotInfo>

export type SlotInfo = { url: string; screen?: never } | { screen: ChatiumScreen; url?: never }
export type AsyncSlotInfo = { url: string; screen?: never } | { screen: ChatiumScreen; url?: never }

export type SlotProps = SlotInfo & {
  target: SlotTarget
}

export type SlotBlock = SlotProps &
  WithKey & {
    type: 'slot'
  }

export async function Slot(props: AsyncSlotInfo & { target: SlotTarget }): Promise<SlotBlock> {
  return {
    type: 'slot',
    target: props.target,
    ...(props.screen ? { screen: await props.screen } : { url: props.url }),
  }
}

/**
 * Injects the given slots into the slots of the given screen. If the screen already has same slot, it is overriden
 * Slots can be given as:
 *  - string - interpreted as slot.url
 *  - ChatiumScreen - interpreted as slot.screen
 *  - SlotInfo - as-is
 *  - Promise of anything above - auto-resolved
 * @param screen
 * @param slots
 */
export async function injectSlots(
  screen: Promise<ChatiumScreen>,
  slots: Record<string, SlotContent | Promise<SlotContent>>,
): Promise<ChatiumScreen> {
  const resolvedScreen = await screen
  const resolvedSlots = await normalizeSlots(slots)
  return {
    ...resolvedScreen,
    slots: {
      ...resolvedScreen.slots,
      ...resolvedSlots,
    },
  }
}

type SlotContent = SlotInfo | ChatiumScreen | string

async function normalizeSlots(slots: Record<string, SlotContent | Promise<SlotContent>>): Promise<SlotsProps> {
  const result = {} as SlotsProps

  for (const slot in slots) {
    const content = await slots[slot]
    result[slot] = isPromise(content) ? normalizeSlot(await content) : normalizeSlot(content)
  }

  return result
}

function normalizeSlot(slotContent: SlotContent): SlotInfo {
  if (typeof slotContent === 'string') {
    return { url: slotContent }
  } else if (isSlotInfo(slotContent)) {
    return slotContent
  } else {
    return { screen: slotContent }
  }
}

function isPromise(b: SlotContent | Promise<SlotContent>): b is Promise<SlotContent> {
  return types.isPromise(b)
}

function isSlotInfo(val: any): val is SlotInfo {
  return val && (typeof val.screen === 'object' || typeof val.url === 'string')
}
