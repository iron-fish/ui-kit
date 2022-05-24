export type Offset = {
  label: string
  offset: string
}

export interface DirectionalOffset extends Offset {
  direction: 'horizontal' | 'vertical'
}
