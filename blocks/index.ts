import { Audio, AudioBlock } from './Audio'
import { Box, BoxBlock } from './Box'
import { BoxAsText } from './BoxAsText'
import { Button, ButtonBlock } from './Button'
import { Footer, FooterBlock } from './Footer'
import { Gallery, GalleryBlock } from './Gallery'
import { Header, HeaderBlock } from './Header'
import { HorizontalCards, HorizontalCardsBlock } from './HorizontalCards'
import { Image, ImageBlock } from './Image'
import { ListItem, ListItemBlock } from './ListItem'
import { Search, SearchBlock } from './Search'
import { Text, TextBlock } from './Text'
import { InlineVideo, InlineVideoBlock, Video, VideoBlock } from './Video'

export {
  Audio,
  BoxAsText,
  Box,
  Button,
  Footer,
  Gallery,
  Header,
  HorizontalCards,
  InlineVideo,
  Image,
  ListItem,
  Search,
  Text,
  Video,
}

export type ChatiumBlock =
  | AudioBlock
  | ButtonBlock
  | BoxBlock
  | FooterBlock
  | GalleryBlock
  | HeaderBlock
  | HorizontalCardsBlock
  | ImageBlock
  | InlineVideoBlock
  | ListItemBlock
  | SearchBlock
  | TextBlock
  | VideoBlock
