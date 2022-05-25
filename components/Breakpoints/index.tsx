export * from './types'
export { default as Horizontal } from './Horizontal'
export { default as Ruler } from './Ruler'
export { default as Vertical } from './Vertical'
export { default as Breakpoints } from './Breakpoints'

import queryStringEnabled from 'hoc/QueryStringEnabled'

import { Directional } from './types'
import Breakpoints from './Breakpoints'

export const TogglableBreakpoints = queryStringEnabled<Directional>(
  'debug',
  Breakpoints
)
export default TogglableBreakpoints
