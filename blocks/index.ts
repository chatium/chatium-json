import { Audio, AudioBlock } from './Audio'
import { Box,BoxBlock } from './Box'
import { BoxAsText } from './BoxAsText'
import { Button, ButtonBlock } from './Button'
import { Field, FieldBlock } from './Field'
import { Footer, FooterBlock } from './Footer'
import { Form, FormBlock } from './Form'
import { Image, ImageBlock } from './Image'
import { ListItem, ListItemBlock } from './ListItem'
import { Search, SearchBlock } from './Search'
import { Slot, SlotBlock } from './Slot'
import { Text, TextBlock } from './Text'
import { Video, VideoBlock } from './Video'
import { VueTemplate, VueTemplateBlock } from './VueTemplate'

export { Audio, BoxAsText, Box, Button, Footer, Image, ListItem, Search, Slot, Text, Video, Form, Field, VueTemplate }

export type ChatiumBlock =
  | AudioBlock
  | ButtonBlock
  | BoxBlock
  | FooterBlock
  | ImageBlock
  | ListItemBlock
  | SearchBlock
  | SlotBlock
  | TextBlock
  | VideoBlock
  | FormBlock
  | FieldBlock
  | VueTemplateBlock
