import { FC, useState, useEffect, ReactNode, useRef } from 'react'

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
  useDimensions,
} from '@chakra-ui/react'
import DropdownArrow from 'svgx/dropdown-arrow'

// This is avoid error: Could not find a declaration file for module 'bem'.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bem = require('bem-classname').bind(null, 'select-field')

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
  size?: string
  renderOption?: (option: OptionType) => ReactNode
  renderLabel?: (label: string) => ReactNode
  renderSelected?: (option: OptionType) => ReactNode
  onSelectOption?: (option: OptionType) => void
}

const SelectField: FC<SelectFieldProps> = ({
  label,
  value = null,
  options = [],
  renderLabel = valueLabel => valueLabel,
  renderOption = option => <Option {...option} />,
  renderSelected = SelectedOption,
  onSelectOption = () => void 0,
  ...props
}) => {
  const [val, setVal] = useState<OptionType | null>(null)
  const [isToTop, setIsToTop] = useState(false)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const styles = useMultiStyleConfig('SelectField', props)
  const containerRef = useRef()
  const dimensions = useDimensions(containerRef, isOpen)

  useEffect(() => {
    setIsToTop(
      containerRef.current.parentElement.getAttribute(
        'data-popper-placement'
      ) === 'top'
    )
  }, [dimensions?.borderBox.top])

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
      placement={props.size !== 'compact' ? 'bottom' : 'bottom-end'}
    >
      <PopoverTrigger>
        <Flex
          id="SelectField"
          className={isOpen ? bem(['focused']) : bem()}
          tabIndex={0}
          {...props}
          sx={{
            ...styles?.container,
            ...props.sx,
            ...(isToTop
              ? {
                  borderTopRadius: isOpen ? 0 : undefined,
                  borderTop: isOpen ? 0 : undefined,
                }
              : {
                  borderBottomRadius: isOpen ? 0 : undefined,
                  borderBottom: isOpen ? 0 : undefined,
                }),
          }}
          role="group"
          justifyContent="center"
          alignItems="center"
        >
          <Flex className={bem('content')} w="100%">
            <Box sx={styles?.label}>{label && renderLabel(label)}</Box>
            <Box sx={styles?.value} overflow="hidden">
              {val && renderSelected(val)}
            </Box>
          </Flex>
          <Box sx={styles.leftIcon}>
            <DropdownArrow
              style={{ transform: `rotate(${isOpen ? '0' : '180deg'})` }}
            />
          </Box>
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        w="100%"
        sx={{
          ...styles?.popover,
          borderBottomRadius: isToTop ? 0 : '0.25rem',
          borderTopRadius: isToTop ? '0.25rem' : 0,
        }}
        ref={containerRef}
      >
        <PopoverBody w="100%">
          {options.map(option => (
            <Box
              w="100%"
              key={option?.value}
              className={bem('option-wrapper', {
                selected: val === option,
              })}
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
