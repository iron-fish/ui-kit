/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable react/prop-types */
import { FC, useState, useEffect } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Stack, Box, Flex } from '@chakra-ui/react'
import SearchAutocomplete from 'components/SearchAutocomplete'
import IconSearch from 'svgx/common/icon-search'
import IconBlock from 'svgx/ironfish/ironfish-block-icon'
import { NAMED_COLORS } from 'theme/constants'

export default {
  title: 'Components/SearchInput',
  component: SearchAutocomplete,
} as ComponentMeta<typeof SearchAutocomplete>

type SearchOption = {
  label: string
  value: string
  id: number
  hash: string
}

const demoOptions = [
  {
    label: 'Blocks',
    options: [...new Array(5)].map((item, index) => {
      const hash = `${index}00045645665456434634564456400004564566545643463456445644564456`
      const id = `${index}3940194`
      return {
        label: `${id} - ${hash}`,
        value: hash,
        hash,
        id,
      }
    }),
  },
  {
    label: 'Transactions',
    options: [...new Array(4)].map((item, index) => {
      const hash = `${index}000045645665456434634564456400004564566545643463456445644564456`
      const id = `3940194${index}`
      return {
        label: `${id} - ${hash}`,
        value: hash,
        hash,
        id,
      }
    }),
  },
]

const demoOptions1 = [...new Array(4)].map((item, index) => {
  const hash = `4${index}00045645665456434634564456400004564566545643463456445644564456`
  const id = `3940194${index}`
  return {
    label: `${id} - ${hash}`,
    value: hash,
    hash,
    id,
  }
})

const Option: FC<{ label: string }> = ({ label }) => {
  return (
    <Flex minH="1.875rem" alignItems="center">
      <Box mr="1rem">
        <IconBlock w="1.625rem" h="1.875rem" />
      </Box>
      <Box
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        color={NAMED_COLORS.LIGHT_BLUE}
      >
        {label}
      </Box>
    </Flex>
  )
}

const getOptionLabel = option => (option ? option.label : '')

const Search = ({ options }) => {
  const [search, setSearch] = useState<string>('')
  const [foundOptions, setFoundOptions] = useState<SearchOption[]>([])
  const [selectedOptionValue, setSelectedValueOption] = useState<SearchOption>()

  // simple search action imitation
  useEffect(() => {
    if (search?.trim()) {
      setFoundOptions(() => {
        const nextOptions = options.reduce((acc, option) => {
          if (option.options) {
            acc.push({
              ...option,
              options: option.options.filter(({ value }) =>
                value?.toString().startsWith(search)
              ),
            })
          } else if (option?.value?.toString().startsWith(search)) {
            acc.push(option)
          }
          return acc
        }, [])
        return nextOptions
      })
    } else {
      setFoundOptions([])
    }
  }, [search])

  return (
    <>
      <SearchAutocomplete<SearchOption>
        InputProps={{
          placeholder: 'Search',
          onChange: e => setSearch(e.target.value),
        }}
        getOptionLabel={getOptionLabel}
        variant="navSearch"
        inputLeftElement={<IconSearch />}
        options={foundOptions}
        renderOption={option => <Option label={getOptionLabel(option)} />}
        onSelectOption={option => setSelectedValueOption(option.id)}
      />
      <Box>selected option id: {selectedOptionValue}</Box>
    </>
  )
}

export const SearchAutocompleteInput: ComponentStory<FC> = () => (
  <Stack>
    <Box display="column" width="100%">
      <h4>
        Autocomplete search with grouped options <br />
        to see result type 1, 2, 3 or 4
      </h4>
      <Search options={demoOptions} />
    </Box>
    <Box display="column" width="100%">
      <h4>
        Autocomplete search with simple options,
        <br /> to see result type 4
      </h4>
      <Search options={demoOptions1} />
    </Box>
  </Stack>
)
