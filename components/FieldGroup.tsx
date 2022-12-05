import {
  cloneElement,
  FC,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from 'react'
import { Flex, StyleProps, useMultiStyleConfig } from '@chakra-ui/react'
import { getValidChildren } from '@chakra-ui/react-utils'

interface FieldGroupProps extends StyleProps {
  children?: ReactNode
}

const isFieldInput = (el: ReactElement) =>
  typeof el.type === 'function' &&
  ((el.type as FunctionComponent).displayName === 'TextField' ||
    (el.type as FunctionComponent).displayName === 'SelectField')

const FieldGroup: FC<FieldGroupProps> = ({ children, ...props }) => {
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
          w: isFieldInput(child) ? '100%' : undefined,
        })
      })}
    </Flex>
  )
}

export default FieldGroup
