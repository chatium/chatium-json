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

export type ChatiumBlock<ExtraBlocks, ExtraActions> =
  | AudioBlock<ExtraBlocks, ExtraActions>
  | ButtonBlock<ExtraBlocks, ExtraActions>
  | FooterBlock<ExtraBlocks, ExtraActions>
  | GalleryBlock<ExtraBlocks, ExtraActions>
  | HeaderBlock<ExtraBlocks, ExtraActions>
  | HorizontalCardsBlock<ExtraBlocks, ExtraActions>
  | ImageBlock<ExtraBlocks, ExtraActions>
  | InlineVideoBlock<ExtraBlocks, ExtraActions>
  | ListItemBlock<ExtraBlocks, ExtraActions>
  | SearchBlock<ExtraBlocks, ExtraActions>
  | TextBlock<ExtraBlocks, ExtraActions>
  | VideoBlock<ExtraBlocks, ExtraActions>
  | ExtraBlocks
