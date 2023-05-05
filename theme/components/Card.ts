import { NAMED_COLORS } from 'theme/constants'
import { cardAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const BASE_STYLES = {
  border: '0.063rem solid',
  bg: NAMED_COLORS.WHITE,
  borderColor: `${NAMED_COLORS.LIGHT_GREY} !important`,
  borderRadius: '0.125rem',
  _dark: {
    bg: NAMED_COLORS.DARKER_GREY,
    borderColor: `${NAMED_COLORS.DARK_GREY} !important`,
  },
  _before: {
    position: 'absolute',
    content: `""`,
    bg: 'inherit',
    h: 'inherit',
    w: 'inherit',
    maxH: 'inherit',
    minH: 'inherit',
    maxW: 'inherit',
    minW: 'inherit',
    height: 'inherit',
    width: 'inherit',
    maxHeight: 'inherit',
    minHeight: 'inherit',
    maxWidth: 'inherit',
    minWidth: 'inherit',
    borderColor: `inherit !important`,
    borderRadius: 'inherit',
    border: 'inherit',
    mr: '-0.25rem',
    mb: '-0.25rem',
    mt: '0.25rem',
    ml: '0.25rem',
    zIndex: -1,
  },
}

const variants = {
  ironFish: definePartsStyle({
    container: BASE_STYLES,
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
  'ironfish-violet-card': definePartsStyle({
    container: {
      ...BASE_STYLES,
      borderRadius: '0.25rem',
      bg: `linear-gradient(89.56deg, ${NAMED_COLORS.LIGHT_VIOLET} 0.38%, ${NAMED_COLORS.VIOLET} 99.64%)`,
      borderColor: NAMED_COLORS.BLACK,
      '&::before': {
        bg: `linear-gradient(89.56deg, ${NAMED_COLORS.WHITE} 0.38%, ${NAMED_COLORS.VIOLET} 99.64%)`,
      },
    },
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
  'ironfish-pistachio-card': definePartsStyle({
    container: {
      ...BASE_STYLES,
      borderRadius: '0.25rem',
      bg: `linear-gradient(89.56deg, ${NAMED_COLORS.LIGHT_PISTACHIO} 0.38%, ${NAMED_COLORS.PISTACHIO} 99.64%)`,
      borderColor: NAMED_COLORS.BLACK,
      '&::before': {
        bg: `linear-gradient(89.56deg, ${NAMED_COLORS.WHITE} 0.38%, ${NAMED_COLORS.PISTACHIO} 99.64%)`,
      },
    },
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
  'ironfish-skyblue-card': definePartsStyle({
    container: {
      ...BASE_STYLES,
      borderRadius: '0.25rem',
      bg: `linear-gradient(89.56deg, ${NAMED_COLORS.LIGHT_SKY_BLUE} 0.38%, ${NAMED_COLORS.SKY_BLUE} 99.64%)`,
      borderColor: NAMED_COLORS.BLACK,
      '&::before': {
        bg: `linear-gradient(89.56deg, ${NAMED_COLORS.WHITE} 0.38%, ${NAMED_COLORS.SKY_BLUE} 99.64%)`,
      },
    },
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
  'ironfish-sandy-card': definePartsStyle({
    container: {
      ...BASE_STYLES,
      borderRadius: '0.25rem',
      bg: `linear-gradient(89.56deg, ${NAMED_COLORS.SANDY} 0.38%, ${NAMED_COLORS.LIGHT_YELLOW} 99.64%)`,
      borderColor: NAMED_COLORS.BLACK,
      '&::before': {
        bg: `linear-gradient(89.56deg, ${NAMED_COLORS.WHITE} 0.38%, ${NAMED_COLORS.LIGHT_YELLOW} 99.64%)`,
      },
    },
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
  'ironfish-pink-card': definePartsStyle({
    container: {
      ...BASE_STYLES,
      borderRadius: '0.25rem',
      bg: `linear-gradient(89.56deg, ${NAMED_COLORS.LIGHT_PINK} 0.38%, ${NAMED_COLORS.LIGHT_RED} 99.64%)`,
      borderColor: NAMED_COLORS.BLACK,
      '&::before': {
        bg: `linear-gradient(89.56deg, ${NAMED_COLORS.WHITE} 0.38%, ${NAMED_COLORS.LIGHT_RED} 99.64%)`,
      },
    },
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
  'ironfish-lemon-card': definePartsStyle({
    container: {
      ...BASE_STYLES,
      borderRadius: '0.25rem',
      bg: `linear-gradient(89.56deg, ${NAMED_COLORS.LEMON} 0.38%, ${NAMED_COLORS.YELLOW} 99.64%)`,
      borderColor: NAMED_COLORS.BLACK,
      '&::before': {
        bg: `linear-gradient(89.56deg, ${NAMED_COLORS.WHITE} 0.38%, ${NAMED_COLORS.YELLOW} 99.64%)`,
      },
    },
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
  'ironfish-beige-card': definePartsStyle({
    container: {
      ...BASE_STYLES,
      borderRadius: '0.25rem',
      bg: `linear-gradient(89.56deg, ${NAMED_COLORS.LIGHT_BEIGE} 0.38%, ${NAMED_COLORS.BEIGE} 99.64%)`,
      borderColor: NAMED_COLORS.BLACK,
      '&::before': {
        bg: `linear-gradient(89.56deg, ${NAMED_COLORS.WHITE} 0.38%, ${NAMED_COLORS.BEIGE} 99.64%)`,
      },
    },
    body: {
      p: 0,
      flex: 'unset',
    },
  }),
  'ironfish-royalblue-card': definePartsStyle({
    container: {
      ...BASE_STYLES,
      borderRadius: '0.25rem',
      bg: `linear-gradient(89.56deg, ${NAMED_COLORS.LIGHT_ROYAL_BLUE} 0.38%, ${NAMED_COLORS.ROYAL_BLUE} 99.64%)`,
      borderColor: NAMED_COLORS.BLACK,
      '&::before': {
        bg: `linear-gradient(89.56deg, ${NAMED_COLORS.WHITE} 0.38%, ${NAMED_COLORS.ROYAL_BLUE} 99.64%)`,
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
