import { Flex, StyleProps, useMultiStyleConfig } from '@chakra-ui/react'
import { Children, cloneElement, FC, isValidElement } from 'react'

const TextFieldGroup: FC<StyleProps> = ({ children, ...props }) => {
  const styles = useMultiStyleConfig('TextFieldGroup', props)
  return (
    <Flex
      {...props}
      sx={{
        ...styles?.container,
        '>:first-child': {
          borderRightRadius: '0 !important',
        },
        '>:not(:first-child):not(:last-child)': {
          borderRadius: '0',
        },
        '>:last-child': {
          borderLeftRadius: '0 !important',
        },
      }}
      alignItems="center"
    >
      {Children.toArray(children)
        .filter(child => isValidElement(child))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((child: any) => {
          return cloneElement(child, {
            ...child?.props,
            sx: { ...styles?.child, ...child?.props?.sx },
            w: child?.type?.displayName === 'TextField' ? '100%' : undefined,
          })
        })}
    </Flex>
  )
}

export default TextFieldGroup
