import {
  FC,
  useState,
  useEffect,
  useRef,
  ReactNode,
  MutableRefObject,
  RefObject,
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
  onSelectOption?: (option: SearchOption) => void
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

  const renderOptionItem = (option: SearchOption) => (
    <Box
      w="100%"
      key={option.value}
      sx={styles?.groupOptionWrapper}
      onClick={() => {
        if (val !== option) {
          setVal(option)
          onSelectOption(option)
          setSearch('')
          onClose()
        }
      }}
    >
      {renderOption(option)}
    </Box>
  )

  const hasOptions =
    options.length &&
    options.some(option => ('options' in option ? option.options.length : true))

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
