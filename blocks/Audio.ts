import { CommonBlockProps } from './commonTypes'

export interface AudioBlock extends CommonBlockProps {
  type: 'audio'
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
