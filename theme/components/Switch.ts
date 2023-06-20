/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { NAMED_COLORS } from 'theme/constants'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const px = (val: number) => `${val}px`

const TRACK_WIDTH = 46
const TRACK_HEIGHT = 24
const TRACK_PADDING = 1
const TRACK_BORDER = 1
const THUMB_SIZE = 20
const THUMB_TRANSLATE_DISTANCE =
  TRACK_WIDTH - THUMB_SIZE - TRACK_PADDING * 2 - TRACK_BORDER * 2

export default defineMultiStyleConfig({
  baseStyle: ({ colorMode }) => {
    return definePartsStyle({
      thumb: {
        display: 'flex',
        alignItems: 'center',
        bg: colorMode === 'light' ? 'black' : NAMED_COLORS.PALE_GREY,
        h: px(THUMB_SIZE),
        w: px(THUMB_SIZE),
        transitionProperty: 'background-color transform',
        _checked: {
          transform: `translateX(${px(THUMB_TRANSLATE_DISTANCE)})`,
          bg: '#54952F',
        },
      },
      track: {
        bg: colorMode === 'light' ? 'white' : NAMED_COLORS.DARKER_GREY,
        border: `${px(TRACK_BORDER)} solid`,
        borderColor:
          colorMode === 'light'
            ? NAMED_COLORS.LIGHT_GREY
            : NAMED_COLORS.DARK_GREY,
        boxSizing: 'border-box',
        padding: px(TRACK_PADDING),
        h: px(TRACK_HEIGHT),
        w: px(TRACK_WIDTH),
      },
    })
  },
})
