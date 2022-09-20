import { FC, useState, useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectField from 'components/SelectField'
import { Box, Stack, VStack } from '@chakra-ui/react'

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
    <Box>
      <h4>Small</h4>
    </Box>
    <SelectField
      label="Select Label"
      w="25%"
      size="small"
      options={[
        {
          label: 'Test 1',
          helperText: 'This is 1 option',
          value: 'option1',
        },
        {
          label: 'Test 2',
          helperText: 'This is 2 option',
          value: 'option2',
        },
        {
          label: 'Test 3',
          helperText: 'This is 3 option',
          value: 'option3',
        },
      ]}
    />
  </Stack>
)

export const DelayedOptions: ComponentStory<FC> = () => {
  const [options, setOptions] = useState([])

  useEffect(() => {
    setTimeout(
      () =>
        setOptions([
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
        ]),
      3000
    )
  }, [])

  return (
    <VStack spacing="2rem" alignItems="start" w="100%">
      <Box w="50%">
        <Box>
          <h4>With default options render</h4>
        </Box>
        <SelectField label="Select Label" options={options} />
      </Box>
      <Box w="50%">
        <Box>
          <h4>With custom options render</h4>
        </Box>
        <SelectField
          renderOption={option => (
            <Box px="1.5rem" h="3rem" textAlign="center" pt={2}>
              <b>{option.label}</b>&nbsp;&nbsp;
              <small style={{ color: 'red' }}>{option.helperText}</small>
            </Box>
          )}
          label="Select Label"
          options={options}
        />
      </Box>
    </VStack>
  )
}
