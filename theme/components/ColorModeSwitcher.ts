/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { ComponentStyleConfig } from '@chakra-ui/theme'

const ColorModeSwitcher: ComponentStyleConfig = {
  baseStyle: {
    background: 'none',
    _focus: {
      boxShadow: 'none',
    },
    _hover: {
      background: 'none',
    },
    _active: {
      background: 'none',
    },
  },
}

export default ColorModeSwitcher
