import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectField from 'components/SelectField'
import { Box, Stack } from '@chakra-ui/react'

export default {
  title: 'Components/Select',
  component: SelectField,
} as ComponentMeta<typeof SelectField>

export const BasicExample: ComponentStory<FC> = () => (
  <Stack>
    <Box>
      <h4>With default options render</h4>
    </Box>
    <SelectField
      label="Select Label"
      w="50%"
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
    <Box>
      <h4>With custom options render</h4>
    </Box>
    <SelectField
      label="Select Label"
      w="50%"
      renderOption={option => (
        <Box px="1.5rem" h="3rem" textAlign="center" pt={2}>
          <b>{option.label}</b>&nbsp;&nbsp;
          <small style={{ color: 'red' }}>{option.helperText}</small>
        </Box>
      )}
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
