import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Box, Stack } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import SideBarInfoIcon from 'components/SideBarInfoIcon'

export default {
  title: 'Components/SideBarNavigationItem',
  component: Button,
} as ComponentMeta<typeof Button>

export const SideBarNavigationItem: ComponentStory<FC> = () => (
  <Stack>
    <Box w={230}>
      <h4>Regular item</h4>
      <Button
        variant="sideBarNavItem"
        leftIcon={<EmailIcon />}
        rightIcon={<SideBarInfoIcon label="R" />}
      >
        Receive $IRON
      </Button>
    </Box>
    <Box w={230}>
      <h4>Active item</h4>
      <Button
        variant="sideBarNavItem"
        leftIcon={<EmailIcon />}
        rightIcon={<SideBarInfoIcon label="R" />}
        isActive={true}
      >
        Receive $IRON
      </Button>
    </Box>
  </Stack>
)
