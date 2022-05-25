import { ChakraTheme, DeepPartial } from '@chakra-ui/react'

import map from 'ramda/src/map'
import pipe from 'ramda/src/pipe'
import propOr from 'ramda/src/propOr'
import toPairs from 'ramda/src/toPairs'

import { Directional } from './types'
import Ruler from './Ruler'

interface DirectionalBreakpointProps extends Directional {
  theme: DeepPartial<ChakraTheme>
}

export const Breakpoints = ({
  direction,
  theme,
}: DirectionalBreakpointProps) => (
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
