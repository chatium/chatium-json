import { Audio, AudioBlock } from './Audio'
import { Button, ButtonBlock } from './Button'
import { Image, ImageBlock } from './Image'
import { Search, SearchBlock } from './Search'
import { Text, TextBlock } from './Text'
import { Video, VideoBlock } from './Video'

export { Audio, Button, Image, Search, Text, Video }

export type ChatiumBlock = AudioBlock | ButtonBlock | ImageBlock | SearchBlock | TextBlock | VideoBlock
