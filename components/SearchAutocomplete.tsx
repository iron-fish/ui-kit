import {
  FC,
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

export interface SearchOption {
  label: string
  value: string | number
}
export interface SearchOptionGroup {
  label: string
  options: SearchOption[]
}

interface SearchAutocompleteProps {
  value?: SearchOption
  InputProps?: IProps
  options?: (SearchOption | SearchOptionGroup)[]
  emptyOption?: ReactNode
  renderOption?: (option: SearchOption) => ReactNode
  onSelectOption?: (option: SearchOption | null) => void
  inputLeftElement?: () => ReactNode
  groupProps?: GroupProps
  variant?: string
}

const SearchAutocomplete: FC<SearchAutocompleteProps> = ({
  value = null,
  InputProps = {},
  options = [],
  emptyOption = 'No matches',
  renderOption = option => <Box>{option?.label}</Box>,
  onSelectOption = () => void 0,
  inputLeftElement,
  groupProps = { headerProps: { as: 'h5' } },
  ...props
}) => {
  const [val, setVal] = useState<SearchOption | null>(value)
  const [search, setSearch] = useState<string>('')
  const styles = useMultiStyleConfig('SearchAutocomplete', props)
  const inputRef = useRef<HTMLInputElement>()
  const popoverRef = useRef<HTMLDivElement>()
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [focusedOption, setFocusedOption] = useState<SearchOption | null>(null)

  useOutsideClickHandler(
    [
      inputRef as MutableRefObject<HTMLElement>,
      popoverRef as MutableRefObject<HTMLElement>,
    ],
    onClose
  )
  useEffect(() => {
    setVal(value)
  }, [value])

  const handleOptionSelect = (option: SearchOption | null) => {
    if (val !== option) {
      setVal(option)
      onSelectOption(option)
      setSearch('')
      onClose()
    }
  }

  const renderOptionItem = (option: SearchOption) => (
    <Box
      w="100%"
      key={option.value}
      sx={styles?.groupOptionWrapper}
      className={
        option.value === focusedOption?.value ? 'option--is-focused' : ''
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
    const focusableOptions = options.reduce<SearchOption[]>((acc, option) => {
      if ('options' in option) {
        acc.push(...option.options)
      } else {
        acc.push(option)
      }
      return acc
    }, [])
    const focusedIndex = focusedOption
      ? focusableOptions.indexOf(focusedOption)
      : -1

    switch (e.key) {
      case 'ArrowUp':
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1
        e.preventDefault()
        break
      case 'ArrowDown':
        nextFocus = (focusedIndex + 1) % options.length
        e.preventDefault()
        break
      case 'Enter':
        handleOptionSelect(focusedOption)
        break
      case 'Escape':
        onClose()
        break
      default:
        break
    }
    setFocusedOption(focusableOptions[nextFocus])
  }

  return (
    <Popover
      matchWidth
      isOpen={isOpen && !!search}
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
            value={val ? val.label : search}
            ref={inputRef as RefObject<HTMLInputElement>}
            onFocus={e => e.target?.select()}
            onKeyDown={onKeyDown}
            onChange={e => {
              if (val) {
                setVal(null)
              }
              setSearch(e.target.value)
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
            options.map((option: SearchOption | SearchOptionGroup) => {
              if ('options' in option) {
                return option.options.length ? (
                  <Group
                    key={`options-${option.label}-group`}
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
                    {option.options.map((item: SearchOption) =>
                      renderOptionItem(item)
                    )}
                  </Group>
                ) : null
              }
              return renderOptionItem(option)
            })
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
