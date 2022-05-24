import { SFC } from 'react'
import { chakra } from '@chakra-ui/react'

import { Offset } from './types'

export const HorizontalRuler: SFC<Offset> = ({ offset, label }) => (
  <chakra.div
    position="fixed"
    borderLeft="1px dashed lime"
    width="0"
    height="100vh"
    top={0}
    left={offset}
    _before={{
      content: `"${label}"`,
      textAlign: 'center',
      width: '3rem',
      transform: 'rotate(-90deg)',
      backgroundColor: 'lime',
      display: 'inline-block',
      padding: '0.5rem',
      marginLeft: '-0.5rem',
      marginTop: '0.5rem',
      fontSize: '0.75rem',
    }}
  />
)

export default HorizontalRuler
