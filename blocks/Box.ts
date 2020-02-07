import { ContainerStyle } from './commonTypes'
import { Text } from './Text'
import { ChatiumChildNode } from '../utils/children'

export type BoxProps = Pick<ContainerStyle, 'paddingBottom' | 'paddingTop'>

/**
 * Container block allowing just box layout properties
 * Now emulated via text block, but should be separate block supported on all clients
 */
export function Box({ paddingBottom, paddingTop }: BoxProps, ...children: ChatiumChildNode[]): ChatiumChildNode[] {
  return [
    paddingTop && Text({ containerStyle: { paddingTop, marginBottom: 0 }, text: '' }),
    children as ChatiumChildNode,
    paddingBottom && Text({ containerStyle: { paddingBottom, marginBottom: 0 }, text: '' }),
  ]
}
