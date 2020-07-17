export interface CustomAction {
  type: string
}

export function customAction(props: CustomAction & any): CustomAction & any {
  return props
}
