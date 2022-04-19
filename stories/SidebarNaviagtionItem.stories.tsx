import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Box, Stack, Badge } from '@chakra-ui/react'
import ArrowDownLeft from 'svgx/arrow-down-left'
import IconHome from 'svgx/icon-home'

export default {
  title: 'Components/SideBarNavigationItem',
  component: Button,
} as ComponentMeta<typeof Button>

export const SideBarNavigationItem: ComponentStory<FC> = () => (
  <Stack>
    <Box w={230}>
      <h4>Regular item</h4>
      <Button
        variant="navItem"
        leftIcon={<IconHome />}
        rightIcon={<Badge variant="navItem">R</Badge>}
      >
        Receive $IRON
      </Button>
    </Box>
    <Box w={230}>
      <h4>Active item</h4>
      <Button
        variant="navItem"
        leftIcon={<ArrowDownLeft />}
        rightIcon={<Badge variant="navItem">R</Badge>}
        isActive={true}
      >
        Receive $IRON
      </Button>
    </Box>
  </Stack>
)
