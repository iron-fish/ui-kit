import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Button, Stack } from '@chakra-ui/react'
import TextField from 'components/TextField'
import FieldGroup from 'components/FieldGroup'
import ColorModeSwitcher from 'components/ColorModeSwitcher'

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

export const BasicExample: ComponentStory<FC> = () => (
  <Stack>
    <Box>
      <h3>Text Field Example</h3>
      <h4>Base</h4>
      <TextField label="Example 1" w="50%" my={1} />
      <h4>With IconButton</h4>
      <TextField
        label="Example 1"
        w="50%"
        my={1}
        LeftAddons={<ColorModeSwitcher />}
      />
      <TextField
        label="Example 1"
        w="50%"
        my={1}
        RightAddons={<ColorModeSwitcher />}
      />
    </Box>
    <Box>
      <h3>Text Field Group Example</h3>
      <h4>Buttons on the left</h4>
      <FieldGroup w="50%" my={1}>
        <Button px="1.5rem">Test 1</Button>
        <TextField label="Group Example" />
      </FieldGroup>
      <h4>Buttons on the right</h4>
      <FieldGroup w="50%" my={1}>
        <TextField label="Group Example" />
        <Button px="1.5rem">Test 1</Button>
      </FieldGroup>
      <h4>Two inputs</h4>
      <FieldGroup w="50%" my={1}>
        <TextField label="Group Example 1" />
        <TextField label="Group Example 2" />
      </FieldGroup>
    </Box>
  </Stack>
)
