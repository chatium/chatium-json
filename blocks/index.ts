import { Audio, AudioBlock } from './Audio'
import { Box, BoxBlock } from './Box'
import { BoxAsText } from './BoxAsText'
import { Button, ButtonBlock } from './Button'
import { CustomBlock, GetCustomBlock } from './CustomBlock'
import { Field, FieldBlock } from './Field'
import { Footer, FooterBlock } from './Footer'
import { Gallery, GalleryBlock } from './Gallery'
import { Header, HeaderBlock } from './Header'
import { Image, ImageBlock } from './Image'
import { ListItem, ListItemBlock } from './ListItem'
import { Search, SearchBlock } from './Search'
import { Slot, SlotBlock } from './Slot'
import { Text, TextBlock } from './Text'
import { Video, VideoBlock } from './Video'

export {
  Audio,
  BoxAsText,
  Box,
  Button,
  Footer,
  Gallery,
  Header,
  Image,
  ListItem,
  Search,
  Slot,
  Text,
  Video,
  Field,
  GetCustomBlock,
}

export type ChatiumBlock =
  | AudioBlock
  | ButtonBlock
  | BoxBlock
  | FooterBlock
  | GalleryBlock
  | HeaderBlock
  | ImageBlock
  | ListItemBlock
  | SearchBlock
  | SlotBlock
  | TextBlock
  | FieldBlock
  | VideoBlock
  | CustomBlock
