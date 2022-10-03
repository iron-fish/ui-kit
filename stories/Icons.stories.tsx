import { FC, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Grid, Text, Icon } from '@chakra-ui/react'
import * as Svgx from 'svgx'

const { IconEye, IconBlinkingEye, ...restSvgx } = Svgx

export default {
  title: 'Components/Icons',
  component: Flex,
} as ComponentMeta<typeof Icon>

const getIconDemo = (UIKitIcon, iconName) => (
  <Flex direction="column" align="center">
    <UIKitIcon height="24px" width="auto" />
    <Text pt="5px">{iconName}</Text>
  </Flex>
)

export const Icons: ComponentStory<FC> = () => {
  const [iconsState, setIconsState] = useState({
    IconEye: true,
    IconBlinkingEye: true,
  })
  return (
    <Grid
      gap={5}
      gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )"
      m="1rem"
    >
      {Object.entries(restSvgx).map(([key, IconComponent]) =>
        getIconDemo(IconComponent, key)
      )}
      <Flex direction="column" align="center">
        <IconEye
          height="24px"
          width="auto"
          crossed={iconsState.IconEye}
          onClick={() => {
            setIconsState({ ...iconsState, IconEye: !iconsState.IconEye })
          }}
        />
        <Text pt="5px">IconEye</Text>
      </Flex>
      <Flex direction="column" align="center">
        <IconBlinkingEye
          height="24px"
          width="auto"
          closed={iconsState.IconBlinkingEye}
          onClick={() => {
            setIconsState({
              ...iconsState,
              IconBlinkingEye: !iconsState.IconBlinkingEye,
            })
          }}
        />
        <Text pt="5px">IconBlinkingEye</Text>
      </Flex>
    </Grid>
  )
}
