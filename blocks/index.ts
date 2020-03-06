import { Audio, AudioBlock } from './Audio'
import { Box } from './Box'
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

export { Audio, Box, Button, Footer, Image, ListItem, Search, Slot, Text, Video, Form, Field }

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
  | FormBlock
  | FieldBlock
