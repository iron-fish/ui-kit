import { NAMED_COLORS } from 'theme/constants'
import { cardAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const variants = {
  ironFish: definePartsStyle({
    container: {
      backgroundColor: NAMED_COLORS.WHITE,
      boxShadow: `0.25rem 0.25rem 0 -0.063rem ${NAMED_COLORS.WHITE}, 0.25rem 0.25rem ${NAMED_COLORS.LIGHT_GREY}`,
      border: `0.063rem solid ${NAMED_COLORS.LIGHT_GREY}`,
      borderRadius: '0.125rem',
      m: '0 0.2rem 0.2rem 0',
      _dark: {
        backgroundColor: NAMED_COLORS.DARKER_GREY,
        border: `0.063rem solid ${NAMED_COLORS.DARK_GREY}`,
        boxShadow: `0.25rem 0.25rem 0 -0.063rem ${NAMED_COLORS.DARKER_GREY}, 0.25rem 0.25rem ${NAMED_COLORS.DARK_GREY}`,
      },
    },
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
}

const cardTheme = defineMultiStyleConfig({
  variants,
})

export default cardTheme
