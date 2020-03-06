import { ChatiumBlock } from 'lib/chatium-json'
import { ChatiumChildNode, flattenChildren } from 'lib/chatium-json/utils/children'

import { CommonBlockProps } from './commonTypes'

export interface FormBlock extends CommonBlockProps {
  type: 'form'
  action: string
  value: object
  blocks?: ChatiumBlock[]
}

export type FormProps = Omit<FormBlock, 'type'>

export async function Form(props: FormProps, ...children: ChatiumChildNode[]): Promise<FormBlock> {
  return {
    type: 'form',
    ...props,
    blocks: await flattenChildren(children),
  }
}
