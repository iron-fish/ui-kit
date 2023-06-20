/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Box,
} from '@chakra-ui/react'
import IconSearch from 'svgx/common/icon-search'

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
          <IconSearch w={'0.875rem'} h={'0.875rem'} />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
    </Box>
    <Box>
      <h4>Nav search input</h4>
      <InputGroup variant="navSearch">
        <InputLeftElement pointerEvents="none">
          <IconSearch />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
    </Box>
  </Stack>
)
