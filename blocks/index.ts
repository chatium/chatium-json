import { Audio, AudioBlock } from './Audio'
import { Box, BoxBlock } from './Box'
import { BoxAsText } from './BoxAsText'
import { Button, ButtonBlock } from './Button'
import { Editor, EditorBlock } from './Editor'
import { Embed, EmbedBlock } from './Embed'
import { Field, FieldBlock } from './Field'
import { Footer, FooterBlock } from './Footer'
import { Form, FormBlock } from './Form'
import { Image, ImageBlock } from './Image'
import { ListItem, ListItemBlock } from './ListItem'
import { Portal, PortalBlock } from './Portal'
import { Search, SearchBlock } from './Search'
import { Slider, SliderBlock } from './Slider'
import { Slot, SlotBlock } from './Slot'
import { Text, TextBlock } from './Text'
import { Video, VideoBlock } from './Video'
import { VueTemplate, VueTemplateBlock } from './VueTemplate'

export {
  Audio,
  BoxAsText,
  Box,
  Button,
  Footer,
  Image,
  ListItem,
  Search,
  Slot,
  Text,
  Video,
  Form,
  Field,
  VueTemplate,
  Slider,
  Embed,
  Editor,
  Portal,
}

export type ChatiumBlock =
  | AudioBlock
  | ButtonBlock
  | BoxBlock
  | FooterBlock
  | ImageBlock
  | ListItemBlock
  | SearchBlock
  | SlotBlock
  | SliderBlock
  | TextBlock
  | VideoBlock
  | FormBlock
  | FieldBlock
  | EmbedBlock
  | VueTemplateBlock
  | PortalBlock
  | EditorBlock
