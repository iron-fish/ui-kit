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

type OptionProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  label: string | ReactNode
  helperText: string | ReactNode
}

interface SelectFieldProps extends FlexProps {
  label: string
  value?: string
  options?: OptionProp[]
}

const SelectField: FC<SelectFieldProps> = ({
  label,
  value = '',
  options = [],
  ...props
}) => {
  const [val, setVal] = useState<string>(value)
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
          tabIndex={0}
          {...props}
          sx={{
            ...styles?.container,
            ...props.sx,
            borderBottomRadius: isOpen ? 0 : undefined,
          }}
          role="group"
          justifyContent="center"
          alignItems="center"
        >
          <Flex flexDirection="column" justifyContent="center" w="100%">
            <Box sx={styles?.label}>{label}</Box>
            <Box sx={styles?.inputWrapper} display={!!val ? 'block' : 'none'}>
              {val}
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
      <PopoverContent w="100%" sx={{
        borderTopRadius: 0,
        borderColor: 'gray'
      }}>
        <PopoverBody w="100%">
          <Box w="100%">Test</Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default SelectField
