import {
  useState,
  useEffect,
  useRef,
  ReactNode,
  MutableRefObject,
  RefObject,
  KeyboardEvent,
} from 'react'

import {
  Box,
  Input,
  InputProps as IProps,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useMultiStyleConfig,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import useOutsideClickHandler from 'hooks/useOutsideClickHandler'
import Group, { GroupProps } from './Group'

export interface SearchOptionGroupType<OptionType> {
  label: string
  options: OptionType[]
}

interface SearchAutocompleteProps<OptionType> {
  value?: OptionType | null
  InputProps?: IProps
  options?: (OptionType | SearchOptionGroupType<OptionType>)[]
  emptyOption?: ReactNode
  renderOption?: (option: OptionType) => ReactNode
  onSelectOption?: (option: OptionType | null) => void
  getOptionLabel: (option: OptionType | null) => ReactNode
  inputLeftElement?: ReactNode
  groupProps?: GroupProps
  variant?: string
}

const SearchAutocomplete = <OptionType,>({
  value = null,
  InputProps = {},
  options = [],
  emptyOption = 'No matches',
  renderOption = option => <Box>{option}</Box>,
  onSelectOption = () => void 0,
  inputLeftElement,
  groupProps = { headerProps: { as: 'h5' } },
  ...props
}: SearchAutocompleteProps<OptionType>) => {
  const [$val, $setVal] = useState<OptionType | null>(value)
  const [$search, $setSearch] = useState<string>('')
  const styles = useMultiStyleConfig('SearchAutocomplete', props)
  const inputRef = useRef<HTMLInputElement>()
  const popoverRef = useRef<HTMLDivElement>()
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [$focusedOption, $setFocusedOption] = useState<OptionType | null>(null)

  useOutsideClickHandler(
    [
      inputRef as MutableRefObject<HTMLElement>,
      popoverRef as MutableRefObject<HTMLElement>,
    ],
    onClose
  )
  useEffect(() => {
    $setVal(value)
  }, [value])

  const handleOptionSelect = (option: OptionType | null) => {
    if ($val !== option) {
      $setVal(option)
      onSelectOption(option)
      $setSearch('')
      onClose()
    }
  }

  const renderOptionItem = (option: OptionType) => (
    <Box
      w="100%"
      key={getOptionLabel(option)}
      sx={styles?.groupOptionWrapper}
      className={
        getOptionLabel(option) === getOptionLabel($focusedOption)
          ? 'option--is-focused'
          : ''
      }
      onClick={() => handleOptionSelect(option)}
    >
      {renderOption(option)}
    </Box>
  )

  const hasOptions =
    options.length &&
    options.some(option => ('options' in option ? option.options.length : true))

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!options.length) {
      return
    }
    if (!isOpen) {
      onOpen()
    }
    let nextFocus = 0
    const focusableOptions = options.reduce<OptionType[]>((acc, option) => {
      if ('options' in option) {
        acc.push(...option.options)
      } else {
        acc.push(option)
      }
      return acc
    }, [])
    const focusedIndex = focusableOptions.findIndex(
      option => getOptionLabel($focusedOption) === getOptionLabel(option)
    )

    switch (e.key) {
      case 'ArrowUp':
        nextFocus =
          focusedIndex > 0 ? focusedIndex - 1 : focusableOptions.length - 1
        e.preventDefault()
        break
      case 'ArrowDown':
        nextFocus = (focusedIndex + 1) % focusableOptions.length
        e.preventDefault()
        break
      case 'Enter':
        handleOptionSelect($focusedOption)
        break
      case 'Escape':
        onClose()
        break
      default:
        break
    }
    $setFocusedOption(focusableOptions[nextFocus])
  }

  return (
    <Popover
      matchWidth
      isOpen={isOpen && !!$search}
      onOpen={onOpen}
      onClose={onClose}
      closeOnBlur={false}
      closeOnEsc
      initialFocusRef={inputRef as RefObject<HTMLInputElement>}
      offset={[0, 15]}
      placement="bottom"
    >
      <PopoverTrigger>
        <InputGroup variant={props.variant || InputProps.variant}>
          {inputLeftElement ? (
            <InputLeftElement pointerEvents="none">
              {inputLeftElement}
            </InputLeftElement>
          ) : null}
          <Input
            {...InputProps}
            value={$val ? getOptionLabel($val) : $search}
            ref={inputRef as RefObject<HTMLInputElement>}
            onFocus={e => e.target?.select()}
            onKeyDown={onKeyDown}
            onChange={e => {
              if ($val) {
                $setVal(null)
              }
              $setSearch(e.target.value)
              InputProps?.onChange && InputProps.onChange(e)
            }}
          />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent
        w="inherit"
        sx={styles?.popover}
        ref={popoverRef as RefObject<HTMLDivElement>}
      >
        <PopoverBody sx={styles?.popoverBody}>
          {hasOptions ? (
            options.map(
              (option: OptionType | SearchOptionGroupType<OptionType>) => {
                if ('options' in option) {
                  return option.options.length ? (
                    <Group
                      key={option.label}
                      sx={{ ...styles?.group, ...groupProps.sx }}
                      label={option.label}
                      headerProps={{
                        ...groupProps.headerProps,
                        sx: {
                          ...styles?.groupHeader,
                          ...groupProps.headerProps.sx,
                        },
                      }}
                    >
                      {option.options.map((item: OptionType) =>
                        renderOptionItem(item)
                      )}
                    </Group>
                  ) : null
                }
                return renderOptionItem(option)
              }
            )
          ) : (
            <Box w="100%" key="empty-option" sx={styles?.emptyOption}>
              {emptyOption}
            </Box>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SearchAutocomplete
