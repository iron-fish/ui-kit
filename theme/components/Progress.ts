import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { NAMED_COLORS } from 'theme/constants'

const Tooltip: ComponentStyleConfig = {
  variants: {
    ironBlue: {
      filledTrack: {
        bgImage: `linear-gradient(to right, transparent 0%, ${NAMED_COLORS.BLUE} 50%, transparent 100%)`,
      },
    },
    ironLightBlue: {
      filledTrack: {
        bgImage: `linear-gradient(to right, transparent 0%, ${NAMED_COLORS.LIGHT_BLUE} 50%, transparent 100%)`,
      },
    },
  },
}

export default Tooltip
