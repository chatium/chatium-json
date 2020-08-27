import { CommonBlockProps } from '../commonTypes'

export interface AudioProps extends CommonBlockProps {
  title?: string
  description?: string
  downloadUrl: string
  fileHash: string | null
  durationSeconds?: number
}

export interface AudioBlock extends AudioProps {
  type: 'audio'
}

export function Audio(props: AudioProps): AudioBlock {
  return {
    type: 'audio',
    ...props,
  }
}