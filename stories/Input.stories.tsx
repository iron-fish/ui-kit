import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Button, Stack } from '@chakra-ui/react'
import TextField from 'components/TextField'
import TextFieldGroup from 'components/TextFieldGroup'
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
      <TextFieldGroup w="50%" my={1}>
        <Button>Test 1</Button>
        <Button>Test 2</Button>
        <TextField label="Group Example" />
      </TextFieldGroup>
      <h4>Buttons on the right</h4>
      <TextFieldGroup w="50%" my={1}>
        <TextField label="Group Example" />
        <Button>Test 1</Button>
        <Button>Test 2</Button>
      </TextFieldGroup>
      <h4>Two inputs</h4>
      <TextFieldGroup w="50%" my={1}>
        <TextField label="Group Example 1" />
        <TextField label="Group Example 2" />
      </TextFieldGroup>
    </Box>
  </Stack>
)
