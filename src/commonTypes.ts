import type { ChatiumActions } from './actions'
import type { ChatiumBlock } from './blocks'

export interface CommonBlockProps<ExtraBlocks, ExtraActions> extends WithKey {
  containerStyle?: ContainerStyle | null
  fallback?: ChatiumBlock<ExtraBlocks, ExtraActions>
  onContext?: ChatiumActions<ExtraActions>
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

export interface Author<ExtraActions> {
  id: string
  name: string
  avatar: Icon
  onClick?: ChatiumActions<ExtraActions>
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
  padding?: number | string
  paddingBottom?: number | string
  paddingLeft?: number | string
  paddingRight?: number | string
  paddingTop?: number | string
  opacity?: number | string
  borderRadius?: number
  borderBottomLeftRadius?: number
  borderBottomRightRadius?: number
  borderTopLeftRadius?: number
  borderTopRightRadius?: number
  borderColor?: Color
  borderBottomColor?: Color
  borderLeftColor?: Color
  borderRightColor?: Color
  borderTopColor?: Color
  borderWidth?: 'hairline' | number
  borderBottomWidth?: 'hairline' | number
  borderLeftWidth?: 'hairline' | number
  borderRightWidth?: 'hairline' | number
  borderTopWidth?: 'hairline' | number
  borderStyle?: 'solid' | 'dotted' | 'dashed'
  position?: 'absolute' | 'relative'
  bottom?: number | string
  left?: number | string
  right?: number | string
  top?: number | string
  height?: number | string
  width?: number | string
}

type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

export interface OverlayProps<ExtraBlocks, ExtraActions> {
  id?: ChatiumJsonId // for updateCurrentScreenBlock action support
  gradientColors?: string[]
  blocks: ChatiumBlock<ExtraBlocks, ExtraActions>[]
  containerStyle?: ContainerStyle
}
