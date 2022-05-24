import { SFC } from 'react'
import { chakra } from '@chakra-ui/react'

import { Offset } from './types'

export const VerticalRuler: SFC<Offset> = ({ offset }) => (
  <chakra.div
    borderTop="1px dashed lime"
    height="0"
    width="100vw"
    left={0}
    top={offset}
  />
)

export default VerticalRuler
