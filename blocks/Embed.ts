import { HeapId } from 'core/heap'

import { CommonBlockProps } from './commonTypes'

export interface EmbedBlock extends CommonBlockProps {
  type: 'embed'
  link: HeapId | null
  entityType: string
  preset: string
}

export type EmbedProps = Omit<EmbedBlock, 'type'>

export function Embed(props: EmbedProps): EmbedBlock {
  return {
    type: 'embed',
    ...props,
  }
}
