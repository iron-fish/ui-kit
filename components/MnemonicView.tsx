import { FC, useState, useEffect, ChangeEvent, useMemo, ReactNode } from 'react'

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
  Skeleton,
} from '@chakra-ui/react'
import IconBlinkingEye from 'svgx/icon-blinkingEye'
import IconInfo from 'svgx/icon-info'

interface MnemonicInputProps {
  index: number
  value: string
  placeholder: string
  isVisible: boolean
  orderNo: number
  isReadOnly: boolean
  onChange: (value: string) => void
  loaded?: boolean
  isInvalid?: boolean
}

const MnemonicInput: FC<MnemonicInputProps> = ({
  index,
  value,
  placeholder = 'Empty',
  isVisible,
  orderNo,
  isReadOnly,
  onChange,
  loaded = true,
  isInvalid,
}) => {
  const $styles = useMultiStyleConfig('MnemonicView', {})

  const visibleValue = useMemo(() => {
    if (isVisible) {
      return value
    }
    return new Array(10).fill('•').join('')
  }, [value, isVisible])

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Skeleton isLoaded={loaded} variant="ironFish">
      <Box>
        <Flex
          sx={$styles.inputContainer}
          alignItems="center"
          p="0rem 0.375rem 0 0.375rem"
        >
          <Kbd
            p="0.0625rem 0"
            mr="0.375rem"
            width="1.5rem"
            display="flex"
            justifyContent="center"
          >
            {orderNo}
          </Kbd>
          <Input
            key={`mnemonic-phrase-view-input-item-${index}`}
            maxLength={8}
            variant={'unstyled'}
            w="5.3125rem"
            value={isReadOnly ? visibleValue : value}
            isReadOnly={isReadOnly}
            placeholder={!isReadOnly ? placeholder : ''}
            type={isVisible ? 'text' : 'password'}
            sx={$styles.input}
            isInvalid={isInvalid}
            onChange={changeHandler}
          />
        </Flex>
      </Box>
    </Skeleton>
  )
}

interface MnemonicViewProps extends Omit<FlexProps, 'onChange'> {
  header: ReactNode
  placeholder: string
  value?: string[]
  toolTipProps?: TooltipProps
  isReadOnly?: boolean
  visible?: boolean
  onChange: (value: string[]) => void
  loaded?: boolean
  error?: {
    isInvalid: boolean
    errors: boolean[]
  }
}

const MnemonicView: FC<MnemonicViewProps> = ({
  header,
  value = [],
  placeholder,
  toolTipProps,
  isReadOnly = false,
  visible,
  onChange,
  loaded,
  error,
  ...rest
}) => {
  const [$show, $setShow] = useState<boolean>(!!visible)
  const [$currentWords, $setCurrentWords] = useState<string[]>([])
  const $styles = useMultiStyleConfig('MnemonicView', rest)

  const onWordChange = (index: number) => (word: string) => {
    const next = [...$currentWords]
    next[index] = word
    onChange(next)
  }

  useEffect(() => {
    $setCurrentWords(isReadOnly ? value : new Array(12).fill(''))
  }, [])

  useEffect(() => {
    $setCurrentWords(value.length ? value : new Array(12).fill(''))
  }, [JSON.stringify(value)])

  return (
    <Flex
      sx={$styles.container}
      direction="column"
      aria-invalid={error?.isInvalid}
      {...rest}
    >
      <Flex justifyContent="space-between" pb="0.75rem" alignItems="center">
        <chakra.h6 sx={$styles.header}>{header}</chakra.h6>
        <Box sx={$styles.icons}>
          <IconBlinkingEye
            closed={$show}
            cursor="pointer"
            onClick={() => $setShow(!$show)}
            mr="0.9375rem"
          />
          <Tooltip hasArrow={true} {...toolTipProps}>
            <IconInfo cursor="pointer" />
          </Tooltip>
        </Box>
      </Flex>
      <Flex gap="0.625rem" flexWrap="wrap">
        {$currentWords.map((word, index) => {
          return (
            <MnemonicInput
              key={`mnemonic-phrase-view-item-${index}`}
              index={index}
              value={word}
              loaded={loaded}
              placeholder={placeholder}
              isVisible={$show}
              orderNo={index + 1}
              isReadOnly={isReadOnly}
              onChange={onWordChange(index)}
              isInvalid={error?.errors[index]}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default MnemonicView
