import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Grid, Text, Tooltip } from '@chakra-ui/react'
import * as Svgx from 'svgx'

export default {
  title: 'Components/Icons',
  component: Flex,
} as ComponentMeta<typeof Tooltip>

const getIconDemo = (UIKitIcon, iconName) => (
  <Flex direction="column" align="center">
    {<UIKitIcon height="24px" width="auto" />}
    <Text pt="5px">{iconName}</Text>
  </Flex>
)

export const Icons: ComponentStory<FC> = () => {
  return (
    <Grid
      gap={5}
      gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
      m="1rem"
    >
      {Object.entries(Svgx).map(([key, IconComponent]) =>
        getIconDemo(IconComponent, key)
      )}
    </Grid>
  )
}
