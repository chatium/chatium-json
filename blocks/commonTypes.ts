export interface CommonBlockProps {
  bgColor?: Color
  fontColor?: Color
}

export type Color = string
export type FontSize = 'mini' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
export type FontStyle = FontSize | 'bold' | 'semibold' | 'italic' | 'underlined' | 'link' | 'muted' | 'warning'

export interface Icon {
  appIcon?: string
  bgColor?: Color
  color?: Color
  image?: string
  imageSize?: ImageSize
  shape?: 'circle' | 'square'
  text?: string | number
}

export type ImageSize = ImageSizePreset | number
export type ImageSizePreset = 'xxlarge' | 'xlarge' | 'large' | 'medium' | 'small'
