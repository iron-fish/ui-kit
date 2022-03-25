import React, { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Box,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export default {
  title: 'Components/SearchInput',
  component: Input,
} as ComponentMeta<typeof Input>

export const SearchInput: ComponentStory<FC> = () => (
  <Stack>
    <Box>
      <h4>Simple search input</h4>
      <InputGroup variant="search">
        <InputLeftElement pointerEvents="none">
          <Search2Icon w={'0.875rem'} h={'0.875rem'} />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
    </Box>
    <Box>
      <h4>Nav search input</h4>
      <InputGroup variant="nav_search">
        <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
        <Input placeholder="Search" />
      </InputGroup>
    </Box>
  </Stack>
)
