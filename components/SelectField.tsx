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
} from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'
import blem from 'blem'

const bem = blem('select-field')

type OptionType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  label: string | ReactNode
  helperText: string | ReactNode
}

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
  renderOption,
  renderSelected,
  onSelectOption = () => void 0,
  ...props
}) => {
  const [val, setVal] = useState<OptionType | null>(null)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const styles = useMultiStyleConfig('SelectField', props)

  useEffect(() => {
    setVal(value)
  }, [value])

  const renderDefaultOption = option => (
    <Box sx={styles?.option}>
      <Box className={bem('option-label')}>{option?.label}</Box>
      <Box className={bem('option-text')}>{option?.helperText}</Box>
    </Box>
  )
  const renderDefaultSelected = option => (
    <Flex alignItems="end">
      <Box className={bem('value-label')} pr={2}>
        {option?.label}
      </Box>
      <Box className={bem('value-text')}>{option?.helperText}</Box>
    </Flex>
  )

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
          <Flex flexDirection="column" justifyContent="center" w="100%">
            <Box sx={styles?.label}>{label}</Box>
            <Box sx={styles?.value} display={!!val ? 'block' : 'none'}>
              {val ? (renderSelected || renderDefaultSelected)(val) : null}
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
              {(renderOption || renderDefaultOption)(option)}
            </Box>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SelectField
