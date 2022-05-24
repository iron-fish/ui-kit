import { SFC } from 'react'
import { DirectionalOffset } from './types'
import HorizontalRuler from './Horizontal'
import VerticalRuler from './Vertical'

export const Ruler: SFC<DirectionalOffset> = ({ offset, direction, label }) =>
  direction === 'horizontal' ? (
    <HorizontalRuler offset={offset} label={label} />
  ) : (
    <VerticalRuler offset={offset} label={label} />
  )

export default Ruler
