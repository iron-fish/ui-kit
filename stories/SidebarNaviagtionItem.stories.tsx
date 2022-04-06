import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, Box, Stack, Badge } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

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
        leftIcon={<EmailIcon />}
        rightIcon={<Badge variant="navItem">R</Badge>}
      >
        Receive $IRON
      </Button>
    </Box>
    <Box w={230}>
      <h4>Active item</h4>
      <Button
        variant="navItem"
        leftIcon={<EmailIcon />}
        rightIcon={<Badge variant="navItem">R</Badge>}
        isActive={true}
      >
        Receive $IRON
      </Button>
    </Box>
  </Stack>
)
