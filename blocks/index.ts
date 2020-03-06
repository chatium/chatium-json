import { Audio, AudioBlock } from './Audio'
import { Box } from './Box'
import { Button, ButtonBlock } from './Button'
import { Footer, FooterBlock } from './Footer'
import { Form, FormBlock } from './Form'
import { Image, ImageBlock } from './Image'
import { ListItem, ListItemBlock } from './ListItem'
import { Search, SearchBlock } from './Search'
import { Setting, SettingBlock } from './Setting'
import { Slot, SlotBlock } from './Slot'
import { Text, TextBlock } from './Text'
import { Video, VideoBlock } from './Video'

export { Audio, Box, Button, Footer, Image, ListItem, Search, Slot, Text, Video, Form, Setting }

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
  | SettingBlock
