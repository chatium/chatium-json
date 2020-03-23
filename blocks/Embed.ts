import { HeapId } from 'core/heap'

import { CommonBlockProps } from './commonTypes'

export interface EmbedBlock extends CommonBlockProps {
  type: 'embed'
  link: HeapId
  entityType: string
  requiredFeatures: Array<string>
}

export type EmbedProps = Omit<EmbedBlock, 'type'>

export function Embed(props: EmbedProps): EmbedBlock {
  return {
    type: 'embed',
    ...props,
  }
}
