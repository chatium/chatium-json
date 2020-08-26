import type { ChatiumActions } from './actions'
import type { ChatiumBlock } from './blocks'

export interface CommonBlockProps extends WithKey {
  containerStyle?: ContainerStyle | null
  fallback?: ChatiumBlock
  onContext?: ChatiumActions
}

export const emptyContainerStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
}

export const noMarginContainerStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
}

export interface WithKey {
  /**
   * Helps client-side rendering optimization
   * Auto-generated using consistent compact algorithm, but can be provided by developer manually
   * When provided by developer manually, should be unique only on local level
   *  and is augmented/modified automatically to be unique on screen level
   */
  key?: ChatiumJsonKey

  /**
   * The main meaning is block unique ID
   * This is also translated to client-side key of component, but is slightly different than key itself:
   *  1) It's not auto-generated
   *  2) Is passed without any modifications, uniqueness must be provided by the developer
   *  3) Due to (2) can be used for actions that require some manipulations pointing to the exact block
   */
  id?: ChatiumJsonId
}

export type ChatiumJsonId = string
export type ChatiumJsonKey = string | number

export interface TextStyleInterface {
  color?: Color
  fontSize?: number
  lineHeight?: number
}

export type Color = string
export type FontSize = 'mini' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
export type FontStyle =
  | FontSize
  | 'bold'
  | 'semibold'
  | 'italic'
  | 'underlined'
  | 'link'
  | 'muted'
  | 'warning'
  | TextStyleInterface

export enum ColorPallete {
  Primary = 'dodgerblue',
  Secondary = '#F0F0F0',
  Dark = '#333333',
  Gray = '#999999',
  Waiting = '#999900',
  Success = '#339933',
  Danger = '#ea4955',
  White = '#FFFFFF',
  Black = '#000000',
  RedOrange = '#DD5A26',
}

export enum LightColorPallete {
  Primary = '#F0F0F7',
  Secondary = '#F5F5F5',
  Waiting = '#FFFFEE',
  Gray = '#CCCCCC',
  Success = '#EEFFEE',
  Danger = '#FFEEEE',
  White = '#FFFFFF',
}

export interface Icon {
  appIcon?: string
  iconCssClass?: string
  bgColor?: Color
  color?: Color
  image?: string
  imageSize?: ImageSize
  shape?: 'circle' | 'square'
  text?: string | number
}

export interface StatusIcon extends Icon {
  isAvailable: boolean
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
  opacity?: number | string
  bottom?: number | string
  borderRadius?: number
  borderColor?: Color
  borderWidth?: 'hairline' | number
}

type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

export function iconEq(a: Icon | null, b: Icon | null): boolean {
  if (a === b) {
    return true
  }

  if (a !== null && b !== null) {
    return (
      a.appIcon === b.appIcon &&
      a.iconCssClass === b.iconCssClass &&
      a.bgColor === b.bgColor &&
      a.color === b.color &&
      a.image === b.image &&
      a.imageSize === b.imageSize &&
      a.shape === b.shape &&
      a.text === b.text
    )
  }

  return false
}

export interface OverlayProps {
  id?: ChatiumJsonId // for updateCurrentScreenBlock action support
  gradientColors?: string[]
  blocks: ChatiumBlock[]
  containerStyle?: ContainerStyle
}