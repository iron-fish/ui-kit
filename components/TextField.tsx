import { FC, useState, useEffect, useRef, ReactNode } from 'react'

import {
  Box,
  Flex,
  FlexProps,
  Input,
  InputProps as IProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

interface TextFieldProps extends FlexProps {
  label: string
  value?: string
  InputProps?: IProps
  LeftAddons?: ReactNode
  RightAddons?: ReactNode
}

const TextField: FC<TextFieldProps> = ({
  label,
  value = '',
  InputProps = {},
  LeftAddons = null,
  RightAddons = null,
  ...props
}) => {
  const [val, setVal] = useState<string>(value)
  const inputRef = useRef<HTMLInputElement>(null)
  const styles = useMultiStyleConfig('TextField', props)

  useEffect(() => {
    setVal(value)
  }, [value])

  return (
    <Flex
      id="TextField"
      tabIndex={0}
      onFocus={() => inputRef?.current?.focus()}
      {...props}
      sx={{
        ...styles?.container,
        ...props.sx,
      }}
      role="group"
      justifyContent="center"
      alignItems="center"
    >
      {LeftAddons}
      <Flex flexDirection="column" justifyContent="center" w="100%">
        <Box sx={styles?.label}>{label}</Box>
        <Box
          sx={styles?.inputWrapper}
          display={!!val ? 'block' : 'none'}
          _groupFocus={{ display: 'block' }}
          _groupFocusVisible={{ display: 'block' }}
          _groupFocusWithin={{ display: 'block' }}
        >
          <Input
            {...InputProps}
            ref={inputRef}
            value={val}
            variant="unstyled"
            onChange={e => {
              setVal(e.target.value)
              InputProps?.onChange && InputProps.onChange(e)
            }}
          />
        </Box>
      </Flex>
      {RightAddons}
    </Flex>
  )
}

export default TextField
