/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC, useState, useEffect, useRef, ReactNode } from 'react'

import {
  Box,
  CSSObject,
  Flex,
  FlexProps,
  Input,
  InputProps as IProps,
  useConst,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import TimeoutManager from 'utils/TimeoutManager'

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
  const displayInputStyles: CSSObject = {
    display: 'block',
    height: '1.5rem',
  }
  const tManager = useConst(new TimeoutManager())

  useEffect(() => {
    setVal(value)
  }, [value])

  return (
    <Flex
      id="TextField"
      tabIndex={0}
      onFocus={() => tManager.execute(() => inputRef?.current?.focus(), 150)}
      onBlur={() => tManager.cancel()}
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
          height={!!val ? '1.5rem' : '0rem'}
          overflow="hidden"
          _groupFocus={displayInputStyles}
          _groupFocusVisible={displayInputStyles}
          _groupFocusWithin={displayInputStyles}
        >
          <Input
            {...InputProps}
            ref={inputRef}
            value={val}
            variant="unstyled"
            borderRadius={0}
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
