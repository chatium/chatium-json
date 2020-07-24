import { ChatiumChildNode } from '../utils/children'
import { ContainerStyle } from './commonTypes'
import { Text } from './Text'

export type BoxAsTextProps = Pick<ContainerStyle, 'bgColor' | 'paddingBottom' | 'paddingTop'>

/**
 * Container block allowing just box layout properties
 * Now emulated via text block, but should be separate block supported on all clients
 */
export function BoxAsText(
  { bgColor, paddingBottom, paddingTop }: BoxAsTextProps,
  ...children: ChatiumChildNode[]
): ChatiumChildNode[] {
  return [
    paddingTop && Text({ containerStyle: { bgColor, paddingTop, marginTop: 0, marginBottom: 0 }, text: '' }),
    children as ChatiumChildNode,
    paddingBottom && Text({ containerStyle: { bgColor, paddingBottom, marginTop: 0, marginBottom: 0 }, text: '' }),
  ]
}
