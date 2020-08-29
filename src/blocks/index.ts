import { Audio, AudioBlock } from './Audio'
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

export { Audio, Button, Footer, Gallery, Header, HorizontalCards, InlineVideo, Image, ListItem, Search, Text, Video }

export type ChatiumBlock<ExtraActions> =
  | AudioBlock<ExtraActions>
  | ButtonBlock<ExtraActions>
  | FooterBlock<ExtraActions>
  | GalleryBlock<ExtraActions>
  | HeaderBlock<ExtraActions>
  | HorizontalCardsBlock<ExtraActions>
  | ImageBlock<ExtraActions>
  | InlineVideoBlock<ExtraActions>
  | ListItemBlock<ExtraActions>
  | SearchBlock<ExtraActions>
  | TextBlock<ExtraActions>
  | VideoBlock<ExtraActions>
