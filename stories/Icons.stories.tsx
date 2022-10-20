import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Grid, Text, Icon } from '@chakra-ui/react'
import * as Svgx from 'svgx'

export default {
  title: 'Components/Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>

const getIconDemo = (UIKitIcon, iconName, iconProps = {}) => (
  <Flex direction="column" align="center">
    <UIKitIcon height="1.5rem" width="100%" {...iconProps} />
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
    <Grid
      gap={5}
      gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
      m="1rem"
    >
      {Object.entries(Svgx).map(([key, IconComponent]) => {
        if (ICONS_STATE[key]) {
          return ICONS_STATE[key].propValues.map(props =>
            getIconDemo(IconComponent, key, props)
          )
        }
        return getIconDemo(IconComponent, key)
      })}
    </Grid>
  )
}
