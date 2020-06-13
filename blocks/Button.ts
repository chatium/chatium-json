import { ChatiumAction, ChatiumActions } from '../actions'
import { Color, CommonBlockProps, FontSize, Icon } from './commonTypes'

export interface ButtonBlock extends CommonBlockProps {
  type: 'button'
  bgColor?: Color
  fontColor?: Color
  fontSize?: FontSize
  icon?: Icon
  iconPosition?: 'left' | 'right'
  onClick?: ChatiumActions
  //а где например долгий тап, по которому появляется возможность редактировать текст на кнопке?
  title?: string
  //тип кнопки - это больше про оформление или назначение? или все сразу и считаем что первое вытекает из второго?
  buttonType?: 'primary' | 'transparent' | 'headerRight' | 'headerLeft' | 'warning' | 'warningTransparent' | 'flat'

}

export type ButtonProps = Omit<ButtonBlock, 'type'>

export function Button(props: ButtonProps): ButtonBlock {
  return {
    type: 'button',
    ...props,
  }
}

//правильно я понимаю что если в my funnels app нужны будут другие кнопки (другой паддинг к примеру), придется добавлять их здесь?
//или свой json такие случаи покрывает?
export function StandardButton(props: ButtonProps): ButtonBlock {
  return {
    type: 'button',
    containerStyle: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingBottom: 5,
      paddingRight: 10,
    },
    ...props,
  }
}

export function ControlButton(title: string, onClick: ChatiumAction, props?: ButtonProps): ButtonBlock {
  return {
    type: 'button',
    buttonType: 'flat',
    fontSize: 'small',
    containerStyle: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingBottom: 5,
      paddingRight: 10,
    },
    title: title,
    onClick: onClick,
    ...props,
  }
}
