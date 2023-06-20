/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'

import { NAMED_COLORS } from 'theme/constants'

const Tooltip: ComponentStyleConfig = {
  variants: {
    ironBlue: ({ isIndeterminate }) => ({
      filledTrack: {
        ...(isIndeterminate
          ? {
              bgImage: `linear-gradient(to right, transparent 0%, ${NAMED_COLORS.BLUE} 50%, transparent 100%)`,
            }
          : { bg: NAMED_COLORS.BLUE }),
      },
    }),
    ironLightBlue: ({ isIndeterminate }) => ({
      filledTrack: {
        ...(isIndeterminate
          ? {
              bgImage: `linear-gradient(to right, transparent 0%, ${NAMED_COLORS.LIGHT_BLUE} 50%, transparent 100%)`,
            }
          : { bgColor: NAMED_COLORS.LIGHT_BLUE }),
      },
    }),
  },
}

export default Tooltip
