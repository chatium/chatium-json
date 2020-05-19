import { CommonBlockProps } from './commonTypes'

export interface AudioBlock extends CommonBlockProps {
  type: 'audio'
  title?: string
  description?: string
  downloadUrl: string
  fileHash: string | null
}

export type AudioProps = Omit<AudioBlock, 'type'>

export function Audio(props: AudioProps): AudioBlock {
  return {
    type: 'audio',
    ...props,
  }
}
