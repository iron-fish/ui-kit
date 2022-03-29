import { FC, useState, useEffect, useRef, ReactNode } from 'react'

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
import { TriangleDownIcon } from '@chakra-ui/icons'
import blem from 'blem'
import useOutsideClickHandler from 'hooks/useOutsideClickHandler'

const bem = blem('autocomplete')

type OptionType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  label: string | ReactNode
  helperText: string | ReactNode
}

/**
 * Default representation of SelectField option
 */
export const Option: FC<OptionType> = ({ label, helperText, ...rest }) => {
  const styles = useMultiStyleConfig('SelectField', rest)

  return (
    <Box sx={styles?.option}>
      <Box className={bem('option-label')}>{label}</Box>
      <Box className={bem('option-text')}>{helperText}</Box>
    </Box>
  )
}

/**
 * Default representation of selected option in SelectField
 */
export const SelectedOption: FC<OptionType> = ({ label, helperText }) => (
  <Flex alignItems="end">
    <Box className={bem('value-label')} pr={2}>
      {label}
    </Box>
    <Box className={bem('value-text')}>{helperText}</Box>
  </Flex>
)

const defaultOptionsFilter = (option: OptionType, searchTerm: string) => {
  const _label = option.label.toString().toLowerCase()
  const _helperText = option.helperText.toString().toLowerCase()
  const _searchTerm = searchTerm.toLowerCase()

  return _label.includes(_searchTerm) || _helperText.includes(_searchTerm)
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
  renderOption = Option,
  renderSelected = SelectedOption,
  onSelectOption = () => void 0,
  filterOption = defaultOptionsFilter,
  ...props
}) => {
  const [val, setVal] = useState<OptionType | null>(value)
  const [search, setSearch] = useState<string>('')
  const styles = useMultiStyleConfig('Autocomplete', props)
  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const { onOpen, onClose, isOpen } = useDisclosure()

  useOutsideClickHandler([inputRef, popoverRef], onClose)
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
      initialFocusRef={inputRef}
      offset={[0, 0]}
      placement="bottom"
    >
      <PopoverTrigger>
        <Flex
          id="Autocomplete"
          className={bem(...(isOpen ? ['', 'focused'] : []))}
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
          <Flex flexDirection="column" justifyContent="center" w="100%">
            <Box sx={styles?.label}>{label}</Box>
            <Box sx={styles?.value} display={val && !isOpen ? 'block' : 'none'}>
              {val && renderSelected(val)}
            </Box>
            <Box sx={styles?.inputWrapper} display={isOpen ? 'block' : 'none'}>
              <Input
                {...InputProps}
                value={search}
                ref={inputRef}
                variant="unstyled"
                onChange={e => {
                  setSearch(e.target.value)
                  InputProps?.onChange && InputProps.onChange(e)
                }}
              />
            </Box>
          </Flex>
          <Box>
            <TriangleDownIcon
              transform={`rotate(${isOpen ? '180deg' : '0'})`}
              w="10px"
            />
          </Box>
        </Flex>
      </PopoverTrigger>
      <PopoverContent w="100%" sx={styles?.popover} ref={popoverRef}>
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
