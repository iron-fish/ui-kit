import { FC, useState, useEffect, ReactNode } from 'react'

import {
  Box,
  Flex,
  FlexProps,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useMultiStyleConfig,
  useStyleConfig,
} from '@chakra-ui/react'
import DropdownArrow from 'svgx/dropdown-arrow'

// This is avoid error: Could not find a declaration file for module 'blem'.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bem = require('blem')('select-field')

export type OptionType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  label: string | ReactNode
  helperText?: string | ReactNode
}
/**
 * Default representation of SelectField option
 */
export const Option: FC<OptionType> = ({ label, helperText, ...rest }) => {
  const styles = useStyleConfig('Option', rest)

  return (
    <Box className="option" sx={styles}>
      <Box className="option-label">{label}</Box>
      <Box className="option-text">{helperText}</Box>
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

interface SelectFieldProps extends FlexProps {
  label: string
  value?: OptionType
  options?: OptionType[]
  renderOption?: (option: OptionType) => ReactNode
  renderSelected?: (option: OptionType) => ReactNode
  onSelectOption?: (option: OptionType) => void
}

const SelectField: FC<SelectFieldProps> = ({
  label,
  value = null,
  options = [],
  renderOption = Option,
  renderSelected = SelectedOption,
  onSelectOption = () => void 0,
  ...props
}) => {
  const [val, setVal] = useState<OptionType | null>(null)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const styles = useMultiStyleConfig('SelectField', props)

  useEffect(() => {
    setVal(value)
  }, [value])

  return (
    <Popover
      matchWidth
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      offset={[0, 0]}
      placement="bottom"
    >
      <PopoverTrigger>
        <Flex
          id="SelectField"
          className={bem(...(isOpen ? ['', 'focused'] : []))}
          tabIndex={0}
          {...props}
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
          <Flex className={bem('content')} w="100%">
            <Box sx={styles?.label}>{label}</Box>
            <Box
              sx={styles?.value}
              height={!!val ? '1.5rem' : '0rem'}
              overflow="hidden"
            >
              {val && renderSelected(val)}
            </Box>
          </Flex>
          <Box>
            <DropdownArrow
              style={{ transform: `rotate(${isOpen ? '0' : '180deg'})` }}
            />
          </Box>
        </Flex>
      </PopoverTrigger>
      <PopoverContent w="100%" sx={styles?.popover}>
        <PopoverBody w="100%">
          {options.map(option => (
            <Box
              w="100%"
              key={option?.value}
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
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SelectField
