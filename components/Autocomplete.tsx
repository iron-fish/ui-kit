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
  Flex,
  FlexProps,
  Input,
  InputProps as IProps,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import useOutsideClickHandler from 'hooks/useOutsideClickHandler'
import { Option, OptionType, SelectedOption } from './SelectField'
import DropdownArrow from 'svgx/dropdown-arrow'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bem = require('utils/className').bem('autocomplete')

const defaultOptionsFilter = (option: OptionType, searchTerm: string) => {
  const _label = option.label?.toString().toLowerCase()
  const _helperText = option.helperText?.toString().toLowerCase()
  const _searchTerm = searchTerm.toLowerCase()

  return _label?.includes(_searchTerm) || _helperText?.includes(_searchTerm)
}

interface AutocompleteProps extends FlexProps {
  label: string
  value?: OptionType
  InputProps?: IProps
  options?: OptionType[]
  emptyOption?: ReactNode
  renderOption?: (option: OptionType) => ReactNode
  renderSelected?: (option: OptionType) => ReactNode
  filterOption?: (option: OptionType, searchTerm: string) => boolean
  onSelectOption?: (option: OptionType) => void
}

const Autocomplete: FC<AutocompleteProps> = ({
  label,
  value = null,
  InputProps = {},
  options = [],
  emptyOption = 'No results',
  renderOption = option => <Option {...option} />,
  renderSelected = SelectedOption,
  onSelectOption = () => void 0,
  filterOption = defaultOptionsFilter,
  ...props
}) => {
  const [val, setVal] = useState<OptionType | null>(value)
  const [search, setSearch] = useState<string>('')
  const styles = useMultiStyleConfig('Autocomplete', props)
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

  const optionsToDisplay = options.filter(option =>
    filterOption(option, search)
  )

  return (
    <Popover
      matchWidth
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      closeOnBlur={false}
      closeOnEsc
      initialFocusRef={inputRef as RefObject<HTMLInputElement>}
      offset={[0, 0]}
      placement="bottom"
    >
      <PopoverTrigger>
        <Flex
          id="Autocomplete"
          className={isOpen ? bem(['focused']) : bem()}
          tabIndex={0}
          {...props}
          onKeyDown={e => e.key === 'Escape' && onClose()}
          sx={{
            ...styles?.container,
            ...props.sx,
            borderBottomRadius: isOpen ? 0 : undefined,
            borderBottom: isOpen ? 0 : undefined,
          }}
          role="group"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            w="100%"
            overflow="hidden"
            height={val || isOpen ? '3.5rem' : '1.5rem'}
            transition="all 300ms ease-in"
          >
            <Box sx={styles?.label}>{label}</Box>
            <Box sx={styles?.value} display={val && !isOpen ? 'block' : 'none'}>
              {val && renderSelected(val)}
            </Box>
            <Box sx={styles?.inputWrapper} display={isOpen ? 'block' : 'none'}>
              <Input
                {...InputProps}
                value={search}
                ref={inputRef as RefObject<HTMLInputElement>}
                variant="unstyled"
                onChange={e => {
                  setSearch(e.target.value)
                  InputProps?.onChange && InputProps.onChange(e)
                }}
              />
            </Box>
          </Flex>
          <Box>
            <DropdownArrow
              style={{ transform: `rotate(${isOpen ? '0' : '180deg'})` }}
            />
          </Box>
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        w="100%"
        sx={styles?.popover}
        ref={popoverRef as RefObject<HTMLDivElement>}
      >
        <PopoverBody w="100%">
          {optionsToDisplay.length > 0 ? (
            optionsToDisplay.map(option => (
              <Box
                w="100%"
                key={option.value}
                className={bem(
                  'option-wrapper',
                  val === option ? 'selected' : ''
                )}
                sx={styles?.optionWrapper}
                onClick={() => {
                  if (val !== option) {
                    setVal(option)
                    onSelectOption(option)
                    onClose()
                  }
                }}
              >
                {renderOption(option)}
              </Box>
            ))
          ) : (
            <Box
              w="100%"
              key="empty-option"
              className={bem('option-wrapper')}
              sx={styles?.emptyOption}
              textAlign="center"
            >
              {emptyOption}
            </Box>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default Autocomplete
