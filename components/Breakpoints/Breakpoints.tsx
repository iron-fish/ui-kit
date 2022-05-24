import map from 'ramda/src/map'
import pipe from 'ramda/src/pipe'
import propOr from 'ramda/src/propOr'
import toPairs from 'ramda/src/toPairs'

import theme from 'theme/theme'

import { Directional } from './types'
import Ruler from './Ruler'

export const Breakpoints = ({ direction }: Directional) => (
  <>
    {pipe(
      propOr({}, 'breakpoints'),
      toPairs,
      map(([k, v]: [string, string]) => (
        <Ruler direction={direction} offset={v} label={k} key={k} />
      ))
    )(theme)}
  </>
)

export default Breakpoints
