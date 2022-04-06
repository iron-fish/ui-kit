import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Stack } from '@chakra-ui/react'
import Autocomplete from 'components/Autocomplete'

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>

export const BasicExample: ComponentStory<FC> = () => (
  <Stack>
    <Box>
      <h4>Basic example</h4>
    </Box>
    <Autocomplete
      label="Example"
      w="50%"
      my={1}
      options={[
        {
          label: 'Test',
          helperText: 'This is 1 option',
          value: 'option1',
        },
        {
          label: 'Test',
          helperText: 'This is 2 option',
          value: 'option2',
        },
        {
          label: 'Test',
          helperText: 'This is 3 option',
          value: 'option3',
        },
      ]}
    />
  </Stack>
)
