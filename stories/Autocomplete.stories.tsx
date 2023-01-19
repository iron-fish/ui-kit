import { FC, useState, useMemo } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Stack, Flex } from '@chakra-ui/react'
import Autocomplete from 'components/Autocomplete'
import { OptionType } from 'components/SelectField'

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

const getSelectedOption = (options: OptionType[] = [], inputValue: string) => {
  let selectedOption = options?.find(o => o.value === inputValue)

  if (!selectedOption) {
    selectedOption = {
      label: inputValue,
      value: inputValue,
    }
  }

  return selectedOption
}

const defaultOptionsFilter = (option: OptionType, searchTerm: string) => {
  const _label = option.label?.toString().toLowerCase()
  const _helperText = option.helperText?.toString().toLowerCase()
  const _searchTerm = searchTerm.toLowerCase()

  return _label?.includes(_searchTerm) || _helperText?.includes(_searchTerm)
}

export const FreeInputClearableExample: ComponentStory<FC> = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectOption, setSelectedOption] = useState('')

  const options = useMemo(
    () =>
      [...new Array(5)].map((item, index) => ({
        label: index ? `Test${index}` : '',
        helperText: `This is ${index} option`,
        value: `option ${index}`,
      })),
    []
  )

  return (
    <Flex w="100%" direction="column">
      <h3></h3>
      <Box>selectOption: {selectOption}</Box>
      <Box>searchTerm: {searchTerm}</Box>
      <Box>
        <Autocomplete
          label="Example"
          w="50%"
          my={1}
          options={options}
          value={getSelectedOption(options, searchTerm || selectOption)}
          onSelectOption={option => setSelectedOption(option.value)}
          filterOption={defaultOptionsFilter}
          isClearable={true}
          onClear={() => {
            setSelectedOption('')
            setSearchTerm('')
          }}
          onClose={() => {
            if (
              options.filter(o => defaultOptionsFilter(o, searchTerm))
                .length === 0
            ) {
              setSelectedOption(searchTerm)
            }
          }}
          InputProps={{
            id: 'test-id',
            placeholder: 'Input Text',
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
      </Box>
    </Flex>
  )
}
