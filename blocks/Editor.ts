import { EditMode } from 'modules/logic/entityUtils'
import { RoutePath } from 'modules/logic/types/helpers/getRoutePath'

import { CommonBlockProps } from './commonTypes'
import { ConfigProps } from './Field'

export interface EditorBlock extends CommonBlockProps {
  type: 'editor'
  mode: EditMode
  model: any
  subject: any
  blocksFactory: any
  config: ConfigProps
  path: RoutePath
}

export type EditorProps = Omit<EditorBlock, 'type'>

export function Editor(props: EditorProps): EditorBlock {
  return {
    type: 'editor',
    ...props,
  }
}
