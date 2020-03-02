import { Audio, AudioBlock } from './Audio'
import { Box } from './Box'
import { Button, ButtonBlock } from './Button'
import { Footer, FooterBlock } from './Footer'
import { Image, ImageBlock } from './Image'
import { ListItem, ListItemBlock } from './ListItem'
import { Search, SearchBlock } from './Search'
import { Text, TextBlock } from './Text'
import { Video, VideoBlock } from './Video'

export { Audio, Box, Button, Footer, Image, ListItem, Search, Text, Video }

export type ChatiumBlock =
  | AudioBlock
  | ButtonBlock
  | FooterBlock
  | ImageBlock
  | ListItemBlock
  | SearchBlock
  | SlotBlock
  | TextBlock
  | VideoBlock
