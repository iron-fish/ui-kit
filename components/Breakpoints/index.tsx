export * from './types'

export { default as Horizontal } from './Horizontal'
export { default as Ruler } from './Ruler'
export { default as Vertical } from './Vertical'
export { default as Breakpoints } from './Breakpoints'

import useQuery from 'hooks/useQuery'

import { Directional } from './types'
import Breakpoints from './Breakpoints'

export const TogglableBreakpoints = ({ direction }: Directional) => {
  const $debug = useQuery('debug')
  return $debug ? <Breakpoints direction={direction} /> : null
}

export default TogglableBreakpoints
