import { FC, useState, useEffect, ReactNode } from 'react'

import {
  Box,
  Flex,
  FlexProps,
  HTMLChakraProps,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'

type OptionType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  label: string | ReactNode
  helperText: string | ReactNode
}

interface OptionProps extends HTMLChakraProps<'div'> {
  option: OptionType
}

const Option: FC<OptionProps> = ({ option, ...props }) => (
  <Box {...props}>
    <Box className="select-field_option_label">{option?.label}</Box>
    <Box className="select-field_option_text">{option?.helperText}</Box>
  </Box>
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
  value,
  options = [],
  renderOption,
  renderSelected,
  onSelectOption,
  ...props
}) => {
  const [val, setVal] = useState<OptionType | null>(null)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const styles = useMultiStyleConfig('SelectField', props)

  useEffect(() => {
    setVal(value || null)
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
          className={isOpen ? 'select-field_focused' : ''}
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
          <Flex flexDirection="column" justifyContent="center" w="100%">
            <Box sx={styles?.label}>{label}</Box>
            <Box sx={styles?.selectedValue} display={!!val ? 'block' : 'none'}>
              {val ? (
                renderSelected ? (
                  renderSelected(val)
                ) : (
                  <Flex sx={styles?.selectedValue} alignItems="end">
                    <Box className="select-field_selected_label" pr={2}>
                      {val?.label}
                    </Box>
                    <Box className="select-field_selected_text">
                      {val?.helperText}
                    </Box>
                  </Flex>
                )
              ) : null}
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
      <PopoverContent w="100%" sx={styles?.popover}>
        <PopoverBody w="100%">
          {val ? (
            <Box w="100%" className="selected" sx={styles?.optionWrapper}>
              {renderOption ? (
                renderOption(val)
              ) : (
                <Option sx={styles?.option} option={val} />
              )}
            </Box>
          ) : null}
          {options
            .filter(option => option !== val)
            .map(option => (
              <Box
                w="100%"
                key={option?.value}
                sx={styles?.optionWrapper}
                onClick={() => {
                  setVal(option)
                  onSelectOption && onSelectOption(option)
                  onClose()
                }}
              >
                {renderOption ? (
                  renderOption(option)
                ) : (
                  <Option sx={styles?.option} option={option} />
                )}
              </Box>
            ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SelectField
