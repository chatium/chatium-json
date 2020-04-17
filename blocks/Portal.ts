import { CommonBlockProps } from './commonTypes'

export interface PortalBlock extends CommonBlockProps {
  type: 'portal'
  name: string
}

export type PortalProps = Omit<PortalBlock, 'type'>

export function Portal(props: PortalProps): PortalBlock {
  return {
    type: 'portal',
    ...props,
  }
}
