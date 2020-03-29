import { ChatiumActions } from '../actions'
import { ChatiumBlock } from './index'

export interface CommonBlockProps extends WithKey {
  containerStyle?: ContainerStyle
  fallback?: ChatiumBlock
}

export const emptyContainerStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
}

export type InputType = 'String' | 'Integer' | 'Text' | 'Color' | 'Money' | 'Entity' | 'Checkbox' | 'Select' | 'Image'

export interface WithKey {
  key?: ChatiumJsonKey
}

export type ChatiumJsonKey = string | number

export type Color = string
export type FontSize = 'mini' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
export type FontStyle = FontSize | 'bold' | 'semibold' | 'italic' | 'underlined' | 'link' | 'muted' | 'warning'

export enum ColorPallete {
  Primary = 'dodgerblue',
  Secondary = '#F0F0F0',
  Gray = '#999999',
  Waiting = '#999900',
  Success = '#339933',
  Danger = '#ea4955',
  White = '#FFFFFF',
}

export enum LightColorPallete {
  Primary = '#F0F0F7',
  Secondary = '#F5F5F5',
  Waiting = '#FFFFEE',
  Success = '#EEFFEE',
  Danger = '#FFEEEE',
  White = '#FFFFFF',
}

export interface Icon {
  appIcon?: string
  bgColor?: Color
  color?: Color
  image?: string
  imageSize?: ImageSize
  shape?: 'circle' | 'square'
  text?: string | number
}

export interface Author {
  id: string
  name: string
  avatar: Icon
  onClick?: ChatiumActions
}

export type ImageSize = ImageSizePreset | number
export type ImageSizePreset = 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small'

export interface ContainerStyle {
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'
  alignItems?: FlexAlignType
  alignSelf?: 'auto' | FlexAlignType
  bgColor?: Color
  flexBasis?: number | string
  flexGrow?: number
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  flexShrink?: number
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  marginBottom?: number | string
  marginLeft?: number | string
  marginRight?: number | string
  marginTop?: number | string
  paddingBottom?: number | string
  paddingLeft?: number | string
  paddingRight?: number | string
  paddingTop?: number | string
}

type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
