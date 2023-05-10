import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Grid, Text, Icon, chakra } from '@chakra-ui/react'
import * as CommonIcons from 'svgx/common'
import * as IronfishIcons from 'svgx/ironfish'

export default {
  title: 'Components/Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>

const getIconDemo = (UIKitIcon, iconName, iconProps = {}) => (
  <Flex direction="column" align="center">
    <UIKitIcon width="100%" height="100%" {...iconProps} />
    <Text pt="5px">{iconName}</Text>
  </Flex>
)

const ICONS_STATE = {
  IconEye: {
    propValues: [{ crossed: true }, { crossed: false }],
  },
  IconBlinkingEye: {
    propValues: [{ closed: true }, { closed: false }],
  },
}

export const Icons: ComponentStory<FC> = () => {
  return (
    <>
      <chakra.h2>Common</chakra.h2>
      <Grid
        gap={5}
        gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
        m="1rem"
        alignItems="flex-end"
      >
        {Object.entries(CommonIcons).map(([key, IconComponent]) => {
          if (ICONS_STATE[key]) {
            return ICONS_STATE[key].propValues.map(props =>
              getIconDemo(IconComponent, key, { ...props, width: '2rem' })
            )
          }
          return getIconDemo(IconComponent, key, { width: '2rem' })
        })}
      </Grid>
      <chakra.h2>Ironfish Special</chakra.h2>
      <Grid
        gap={5}
        gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
        m="1rem"
        alignItems="flex-end"
      >
        {Object.entries(IronfishIcons).map(([key, IconComponent]) => {
          return getIconDemo(IconComponent, key, { height: '4rem' })
        })}
      </Grid>
    </>
  )
}
