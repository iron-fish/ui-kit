import { FC, useState, ChangeEvent, useMemo, ReactNode } from 'react'

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
  value: string
  placeholder: string
  isVisible: boolean
  isReadOnly: boolean
  index: number
  onChange: (value: string, index: number) => void
  loaded?: boolean
  isInvalid?: boolean
}

const MnemonicInput: FC<MnemonicInputProps> = ({
  value,
  placeholder = 'Empty',
  isVisible,
  isReadOnly,
  index,
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
    onChange(e.target.value, index)
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
            {index + 1}
          </Kbd>
          <Input
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
  isInvalid?: boolean
  isInvalidInputs?: boolean[]
  wordsAmount?: number
}

function createWordsArray(words: string[], wordsCount: number) {
  if (words.length === wordsCount) {
    return words
  }

  return Array.from({ length: wordsCount }).map((_, i) => {
    return words[i] || ''
  })
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
  isInvalid,
  isInvalidInputs = [],
  wordsAmount = 12,
  ...rest
}) => {
  const [$show, $setShow] = useState<boolean>(!!visible)
  const $styles = useMultiStyleConfig('MnemonicView', rest)

  const wordsArray = createWordsArray(value, wordsAmount)

  const onWordChange = (word: string, index: number) => {
    const words = [...wordsArray]
    words[index] = word
    onChange(words)
  }

  return (
    <Flex
      sx={$styles.container}
      direction="column"
      aria-invalid={isInvalid}
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
        {wordsArray.map((word, index) => {
          return (
            <MnemonicInput
              key={index}
              value={word}
              loaded={loaded}
              placeholder={placeholder}
              isVisible={$show}
              isReadOnly={isReadOnly}
              index={index}
              onChange={onWordChange}
              isInvalid={isInvalidInputs[index]}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default MnemonicView
