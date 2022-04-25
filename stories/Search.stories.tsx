import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Box,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react'
import SearchAutocomplete, { OptionType } from 'components/SearchAutocomplete'
import IconSearch from 'svgx/icon-search'
import IconBlock from 'svgx/icon-block'
import { NAMED_COLORS } from 'theme/constants'

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
      <InputGroup variant="nav_search">
        <InputLeftElement pointerEvents="none">
          <IconSearch />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
    </Box>
  </Stack>
)

const Option: FC<OptionType> = ({ blockHeight, value }) => {
  const hashValue = useBreakpointValue({
    base: truncateHash(value, 2),
    md: value,
  })
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
        {blockHeight} - {hashValue}
      </Box>
    </Flex>
  )
}

function truncateHash(hash: string, parts = 4, chars = 4): string {
  const blockLength = (hash.length - chars) / (parts - 1)
  const result = []

  while (result.length < parts - 1) {
    const startPosition = result.length * blockLength
    result.push(hash.slice(startPosition, startPosition + chars))
  }

  result.push(hash.slice(hash.length - chars, hash.length))

  return result.join('...')
}

const groupOptionsBy = option => {
  if (!option || !option.object) {
    return ''
  }

  if (option.object === 'block') {
    return 'Blocks'
  }

  return 'Transactions'
}

export const SearchAutocompleteInput: ComponentStory<FC> = () => (
  <Stack>
    <Box display="column" width="18.75rem">
      <h4>Autocomplete search</h4>
      <SearchAutocomplete
        InputProps={{ placeholder: 'Search' }}
        variant="nav_search"
        inputLeftElement={<IconSearch />}
        options={[...new Array(10)].map((item, index) => {
          const value = `000045645665456434634564456400004564566545643463456445644564456${index}`
          const blockHeight = `${index}3940194`
          return {
            label: `${blockHeight} - ${value}`,
            object: index % 2 === 0 ? 'block' : 'transaction',
            blockHeight,
            value,
          }
        })}
        renderOption={option => <Option {...option} />}
        groupOptionsBy={groupOptionsBy}
      />
    </Box>
    <Box display="column" width="18.75rem">
      <h4>Autocomplete search no options</h4>
      <SearchAutocomplete
        InputProps={{ placeholder: 'Search' }}
        variant="nav_search"
        inputLeftElement={<IconSearch />}
        renderOption={option => <Option {...option} />}
        groupOptionsBy={groupOptionsBy}
      />
    </Box>
  </Stack>
)
