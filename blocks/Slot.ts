import { CommonBlockProps } from 'lib/chatium-json/blocks/commonTypes'

type SlotTarget = 'left' | 'right'

export type SlotsProps = Record<SlotTarget, SlotBlock>

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
