import { Flex, StyleProps, useMultiStyleConfig } from '@chakra-ui/react'
import { getValidChildren } from '@chakra-ui/react-utils'
import { cloneElement, FC, FunctionComponent, ReactElement } from 'react'

const FieldGroup: FC<StyleProps> = ({ children, ...props }) => {
  const styles = useMultiStyleConfig('FieldGroup', props)
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
      {getValidChildren(children).map((child: ReactElement) => {
        return cloneElement(child, {
          ...child?.props,
          sx: { ...styles?.child, ...child?.props?.sx },
          w:
            typeof child.type === 'function' &&
            (child.type as FunctionComponent).displayName === 'TextField'
              ? '100%'
              : undefined,
        })
      })}
    </Flex>
  )
}

export default FieldGroup
