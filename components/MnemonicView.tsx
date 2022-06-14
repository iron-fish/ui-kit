import { FC, useState } from 'react'

import {
  Box,
  Flex,
  Kbd,
  FlexProps,
  TooltipProps,
  chakra,
  Tooltip,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import IconBlinkingEye from 'svgx/icon-blinkingEye'
import IconInfo from 'svgx/icon-info'

interface MnemonicViewProps extends FlexProps {
  header: string
  words: string[]
  toolTipProps: TooltipProps
}

const MnemonicView: FC<MnemonicViewProps> = ({
  header,
  words,
  toolTipProps,
  ...rest
}) => {
  const [show, setShow] = useState<boolean>(false)
  const styles = useMultiStyleConfig('MnemonicView', rest)

  return (
    <Flex sx={styles.container} direction="column" {...rest}>
      <Flex justifyContent="space-between" pb="0.75rem" alignItems="center">
        <chakra.h6 sx={styles.header}>{header}</chakra.h6>
        <Box sx={styles.icons}>
          <IconBlinkingEye
            closed={show}
            onClick={() => setShow(!show)}
            mr="0.9375rem"
          />
          <Tooltip hasArrow={true} {...toolTipProps}>
            <IconInfo />
          </Tooltip>
        </Box>
      </Flex>
      <Flex gap="0.625rem" flexWrap="wrap">
        {words.map((word, index) => {
          return (
            <Flex
              key={`${word}-${index}`}
              sx={styles.item}
              p={
                show ? '0.375rem 0.75rem 0.375rem 0.375rem' : '0.375rem 0.75rem'
              }
              alignItems="center"
              fontSize={show ? '1rem' : '0.875rem'}
            >
              {show ? (
                <Kbd p="0.0625rem 0.5625rem" mr="0.75rem">
                  {index + 1}
                </Kbd>
              ) : (
                ''
              )}
              {show ? word : '•••••••'}
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default MnemonicView
