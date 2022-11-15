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

export const FlipExample: ComponentStory<FC> = () => (
  <Stack h="745px">
    <Box>
      <h4>Flip example</h4>
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
    <Box mt="250px !important">
      <Autocomplete
        label="Example"
        w="50%"
        my={1}
        options={[...new Array(5)].map((item, index) => ({
          label: `Test${index}`,
          helperText: `This is ${index} option`,
          value: `option ${index}`,
        }))}
      />
    </Box>
    <Box mt="auto !important">
      <Autocomplete
        label="Example"
        w="50%"
        my={1}
        options={[...new Array(5)].map((item, index) => ({
          label: `Test${index}`,
          helperText: `This is ${index} option`,
          value: `option ${index}`,
        }))}
      />
    </Box>
  </Stack>
)
