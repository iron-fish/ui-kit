import { FC, useState, useEffect, ReactNode, useRef, RefObject } from 'react'

import {
  Box,
  Flex,
  FlexProps,
  Popover,
  PopoverBody,
  PopoverBodyProps,
  PopoverContent,
  PopoverContentProps,
  PopoverProps,
  PopoverTrigger,
  useDisclosure,
  useMultiStyleConfig,
  useStyleConfig,
} from '@chakra-ui/react'
import DropdownArrow from 'svgx/common/dropdown-arrow'
import CloseIcon from 'svgx/common/close-icon'
import useToTop from 'hooks/useToTop'

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

export interface SelectedOptionType extends OptionType {
  isClearable?: boolean
  onClear?: () => void
}

/**
 * Default representation of selected option in SelectField
 */
export const SelectedOption: FC<SelectedOptionType> = ({
  label,
  helperText,
  isClearable,
  onClear = () => void 0,
}) => (
  <Flex alignItems="end">
    <Box
      className={bem('value-label')}
      pr={label ? 2 : 0}
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    >
      {label}
    </Box>
    <Box className={bem('value-text')}>{helperText}</Box>
    {(label || helperText) && isClearable && (
      <CloseIcon
        width="0.625rem"
        height="0.625rem"
        alignSelf="baseline"
        ml="auto"
        mr="1.5rem"
        cursor="pointer"
        onClick={e => {
          e.stopPropagation()
          onClear()
        }}
      />
    )}
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
  isClearable?: boolean
  onClear?: () => void
  maxMenuHeight?: number
  popoverProps?: {
    popover: PopoverProps
    popoverContent: PopoverContentProps
    popoverBody: PopoverBodyProps
  }
}

const SelectField: FC<SelectFieldProps> = ({
  label,
  value = null,
  options = [],
  renderLabel = valueLabel => valueLabel,
  renderOption = option => <Option {...option} />,
  renderSelected = SelectedOption,
  onSelectOption = () => void 0,
  isClearable,
  onClear = () => void 0,
  maxMenuHeight,
  popoverProps,
  ...props
}) => {
  const [val, setVal] = useState<OptionType | null>(null)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const styles = useMultiStyleConfig('SelectField', props)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const isToTop = useToTop(containerRef, triggerRef, isOpen)

  useEffect(() => {
    setVal(value)
  }, [value])

  return (
    <Popover
      matchWidth={props.size !== 'compact'}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      offset={[0, 0]}
      placement={props.size !== 'compact' ? 'bottom' : 'bottom-end'}
      {...popoverProps?.popover}
    >
      <PopoverTrigger>
        <Flex
          ref={triggerRef as RefObject<HTMLDivElement>}
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
              {val &&
                renderSelected({
                  ...val,
                  isClearable,
                  onClear: () => {
                    setVal(null)
                    onClear()
                  },
                })}
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
        {...popoverProps?.popoverContent}
        sx={{
          ...styles?.popover,
          borderBottomRadius: isToTop ? 0 : '0.25rem',
          borderTopRadius: isToTop ? '0.25rem' : 0,
          ...popoverProps?.popoverContent.sx,
        }}
        ref={containerRef as RefObject<HTMLDivElement>}
      >
        <PopoverBody
          w="100%"
          {...popoverProps?.popoverBody}
          sx={{
            ...(maxMenuHeight && {
              maxHeight: `${maxMenuHeight}px`,
              overflowY: 'scroll',
              scrollSnapType: 'y mandatory',
            }),
            ...popoverProps?.popoverBody.sx,
          }}
        >
          {options.map(option => (
            <Box
              w="100%"
              key={
                typeof option.value === 'object'
                  ? Object.values(option.value).join('-')
                  : Object.values(option).join('-')
              }
              className={bem('option-wrapper', {
                selected: val === option,
              })}
              sx={{
                ...styles?.optionWrapper,
                ...(maxMenuHeight && {
                  scrollSnapAlign: 'start',
                }),
              }}
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
