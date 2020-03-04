import { CommonBlockProps } from 'lib/chatium-json/blocks/commonTypes'

import { ChatiumScreen } from '../Screen'

type SlotTarget = 'left' | 'right'
export type SlotsProps = Record<SlotTarget, Omit<SlotBlock, 'type' | 'target'>>

export interface SlotProps extends CommonBlockProps {
  target: SlotTarget
  url?: string
  screen?: Screen
}

export interface SlotBlock extends SlotProps {
  type: 'slot'
}

export async function Slot(props: SlotProps): Promise<SlotBlock> {
  const screen = await props.screen

  return {
    type: 'slot',
    ...props,
    screen,
  }
}

export async function injectSlots(
  screen: Promise<ChatiumScreen>,
  slots: Record<string, Omit<SlotBlock, 'type' | 'target'>>,
): Promise<ChatiumScreen> {
  return {
    ...(await screen),
    slots,
  }
}
