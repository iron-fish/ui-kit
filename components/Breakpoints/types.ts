export interface Offset {
  label: string
  offset: string
}

export interface Directional {
  direction: 'horizontal' | 'vertical'
}

export interface DirectionalOffset extends Directional, Offset {}
