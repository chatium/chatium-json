import { ChatiumActions } from '../actions'
import { ChatiumChildNode, flattenChildren } from '../utils/children'
import { Color, CommonBlockProps, FontSize, FontStyle } from './commonTypes'
import { ChatiumBlock } from './index'

//насколько я понимаю html-теги в тексте не работают
//думали на эту тему в целом? может псевдокод ввести или ограниченный набор обычных тегов?
//кейс такой - абзац в котором только часть текста идет подчеркнутой или ссылка идет только с фрагмента текста
//причем необязательно этим юзер в редактировании сразу может пользоваться, просто обработка того что прилетает с бека
export type TextBlock = TextProps & {
  type: 'text'
  blocks?: ChatiumBlock[]
}

export type TextProps = {
  color?: Color
  fontSize?: FontSize
  isBold?: boolean
  onClick?: ChatiumActions
} & TextContent &
  CommonBlockProps

// if tokens is defined text is ignored, so they shouldn't be defined together
export type TextContent = { text: string; tokens?: never } | { tokens: TextToken[]; text?: never }

type TextToken = string | CustomToken
interface CustomToken {
  v: string
  s?: FontStyle[]
  onClick?: ChatiumActions
}

export async function Text(props: TextProps, ...children: ChatiumChildNode[]): Promise<TextBlock> {
  return {
    type: 'text',
    ...props,
    blocks: await flattenChildren(children),
  }
}

export async function EmptyTextBlock(): Promise<TextBlock> {
  return {
    type: 'text',
    text: '',
    containerStyle: {
      paddingLeft: 0,
      paddingBottom: 0,
      paddingTop: 0,
      paddingRight: 0,
      marginBottom: 0,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
    },
  }
}
