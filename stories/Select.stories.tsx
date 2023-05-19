import { FC, useState, useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectField from 'components/SelectField'
import { Flex, Box, Stack, VStack } from '@chakra-ui/react'
import ArrowUpArrowDownIcon from 'svgx/arrow-up-arrow-down-icon'

export default {
  title: 'Components/Select',
  component: SelectField,
} as ComponentMeta<typeof SelectField>

const renderLabel = label => {
  return (
    <Flex alignItems="center" gap="5px">
      <ArrowUpArrowDownIcon />
      {label}
    </Flex>
  )
}

export const BasicExample: ComponentStory<FC> = () => (
  <Stack>
    <Box>
      <h4>With default options render</h4>
    </Box>
    <SelectField
      label="Select Label"
      w="50%"
      options={[...new Array(20)].map((item, index) => ({
        label: `Test${index}`,
        helperText: `This is ${index} option`,
        value: `option ${index}`,
      }))}
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
    <Box>
      <h4>Compact</h4>
    </Box>
    <Flex width="100%">
      {[0, 'auto'].map((ml, index) => (
        <SelectField
          key={index}
          ml={ml}
          label="Sort"
          size="compact"
          renderLabel={renderLabel}
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
              label: 'This is 3 option',
              helperText: 'This is 3 option',
              value: 'option3',
            },
          ]}
        />
      ))}
    </Flex>
    <Box>
      <h4>Flip</h4>
    </Box>
    <SelectField
      label="Select Label"
      w="50%"
      options={[...new Array(7)].map((item, index) => ({
        label: `Test${index}`,
        helperText: `This is ${index} option`,
        value: `option ${index}`,
      }))}
    />
    <SelectField
      label="Select Label"
      w="50%"
      options={[...new Array(5)].map((item, index) => ({
        label: `Test${index}`,
        helperText: `This is ${index} option`,
        value: `option ${index}`,
      }))}
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

export const ClearableExample: ComponentStory<FC> = () => (
  <Stack>
    <SelectField
      label="Select Label"
      w="50%"
      isClearable={true}
      options={[...new Array(5)].map((item, index) => ({
        label: `Test${index}`,
        helperText: `This is ${index} option`,
        value: `option ${index}`,
      }))}
    />
  </Stack>
)

export const MaxMenuHeightExample: ComponentStory<FC> = () => (
  <SelectField
    label="Select Label"
    w="50%"
    maxMenuHeight={325}
    options={[...new Array(20)].map((item, index) => ({
      label: `Test${index}`,
      helperText: `This is ${index} option`,
      value: `option ${index}`,
    }))}
  />
)
