import { FC, useState, useRef, useEffect, ChangeEvent, useMemo } from 'react'

import {
  Box,
  Flex,
  Kbd,
  FlexProps,
  TooltipProps,
  chakra,
  Tooltip,
  useMultiStyleConfig,
  Input,
} from '@chakra-ui/react'
import IconBlinkingEye from 'svgx/icon-blinkingEye'
import IconInfo from 'svgx/icon-info'
import { FONTS } from 'theme/constants'

interface MnemonicInputProps {
  value: string
  placeholder: string
  isVisible: boolean
  orderNo: number
  isReadOnly: boolean
  onChange: (value: string) => void
}

const MnemonicInput: FC<MnemonicInputProps> = ({
  value,
  placeholder = 'Empty',
  isVisible,
  orderNo,
  isReadOnly,
  onChange,
}) => {
  const $styles = useMultiStyleConfig('MnemonicView', {})
  const [$textWidth, $setTextWidth] = useState(0)
  const $textBox = useRef<HTMLDivElement>(null)

  const visibleValue = useMemo(() => {
    if (isVisible) {
      return value
    } else {
      if (isReadOnly) {
        return new Array(7).fill('•').join('')
      } else {
        return new Array(value.length).fill('•').join('')
      }
    }
  }, [value, isVisible])

  useEffect(() => {
    $setTextWidth($textBox.current?.offsetWidth || 0)
  }, [value, visibleValue, placeholder, $textBox.current?.offsetWidth])

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Box>
      <Box
        ref={$textBox}
        sx={{
          opacity: 0,
          height: '0',
          width: 'min-content',
          fontSize: '1rem',
          fontFamily: FONTS.FAVORIT,
        }}
      >
        {isReadOnly ? visibleValue : visibleValue || placeholder}
      </Box>
      <Flex
        sx={$styles.inputContainer}
        alignItems="center"
        p={isVisible ? '0rem 0.75rem 0 0.375rem' : '0rem 0.75rem'}
      >
        {isVisible && (
          <Kbd p="0.0625rem 0.5625rem" mr="0.6875rem">
            {orderNo}
          </Kbd>
        )}
        <Input
          variant={'unstyled'}
          w={`${$textWidth}px`}
          value={isReadOnly ? visibleValue : value}
          isReadOnly={isReadOnly}
          placeholder={!isReadOnly ? placeholder : ''}
          type={isVisible ? 'text' : 'password'}
          sx={$styles.input}
          onChange={changeHandler}
        />
      </Flex>
    </Box>
  )
}

interface MnemonicViewProps extends Omit<FlexProps, 'onChange'> {
  header: string
  placeholder: string
  value?: string[]
  toolTipProps?: TooltipProps
  isReadOnly: boolean
  onChange: (value: string[]) => void
}

const MnemonicView: FC<MnemonicViewProps> = ({
  header,
  value = [],
  placeholder,
  toolTipProps,
  isReadOnly,
  onChange,
  ...rest
}) => {
  const [$show, $setShow] = useState<boolean>(!isReadOnly)
  const [$currentWords, $setCurrentWords] = useState<string[]>([])
  const $styles = useMultiStyleConfig('MnemonicView', rest)

  const onWordChange = (index: number) => (word: string) =>
    $setCurrentWords(prev => {
      const next = [...prev]
      next[index] = word
      return next
    })

  useEffect(() => {
    $setCurrentWords(isReadOnly ? value : new Array(12).fill(''))
  }, [])

  useEffect(() => {
    if (!isReadOnly && onChange) {
      onChange($currentWords)
    }
  }, [$currentWords])

  return (
    <Flex sx={$styles.container} direction="column" {...rest}>
      <Flex justifyContent="space-between" pb="0.75rem" alignItems="center">
        <chakra.h6 sx={$styles.header}>{header}</chakra.h6>
        <Box sx={$styles.icons}>
          <IconBlinkingEye
            closed={$show}
            onClick={() => $setShow(!$show)}
            mr="0.9375rem"
          />
          <Tooltip hasArrow={true} {...toolTipProps}>
            <IconInfo />
          </Tooltip>
        </Box>
      </Flex>
      <Flex gap="0.625rem" flexWrap="wrap">
        {$currentWords.map((word, index) => {
          return (
            <MnemonicInput
              key={index}
              value={word}
              placeholder={placeholder}
              isVisible={$show}
              orderNo={index + 1}
              isReadOnly={isReadOnly}
              onChange={onWordChange(index)}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default MnemonicView
