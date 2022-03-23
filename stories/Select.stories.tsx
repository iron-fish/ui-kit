import React, { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SelectField from 'components/SelectField'
import { Stack } from '@chakra-ui/react'

export default {
  title: 'Components/Select',
  component: SelectField,
} as ComponentMeta<typeof SelectField>

export const BasicExample: ComponentStory<FC> = () => (
  <Stack>
    <SelectField label="Select Label" w="50%" />
    <SelectField label="Select Label" w="50%" />
  </Stack>
)
