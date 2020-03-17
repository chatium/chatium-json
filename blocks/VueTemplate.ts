import { CommonBlockProps } from './commonTypes'

export interface VueTemplateBlock extends CommonBlockProps {
  type: 'vue'
  template: string
}

export type VueTemplateProps = Omit<VueTemplateBlock, 'type'>

export function VueTemplate(props: VueTemplateProps): VueTemplateBlock {
  return {
    type: 'vue',
    ...props,
  }
}
