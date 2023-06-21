/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* eslint-disable react/prop-types */
import { ReactNode } from 'react'
import {
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  ToastProps,
  useMultiStyleConfig,
  Box,
} from '@chakra-ui/react'

interface IronToastProps extends ToastProps {
  actions?: ReactNode
}

const IronAlert: React.FC<IronToastProps> = props => {
  const {
    status,
    variant = 'simple',
    id,
    title,
    description,
    icon,
    actions,
  } = props
  const styles = useMultiStyleConfig('Alert', props)
  const ids = id
    ? {
        root: `toast-${id}`,
        title: `toast-${id}-title`,
        description: `toast-${id}-description`,
      }
    : undefined

  return (
    <Flex w="100%" justifyContent="center">
      <Alert
        addRole={false}
        status={status}
        variant={variant}
        id={ids?.root}
        alignItems="start"
        textAlign="start"
        width="auto"
      >
        {icon && <AlertIcon>{icon}</AlertIcon>}
        <Flex direction="column" flex="1" maxWidth="100%" gap="0.75rem">
          {title && <AlertTitle id={ids?.title}>{title}</AlertTitle>}
          {description && (
            <AlertDescription id={ids?.description} display="block">
              {description}
            </AlertDescription>
          )}
        </Flex>
        {actions && <Box sx={styles.actions}>{actions}</Box>}
      </Alert>
    </Flex>
  )
}

export default IronAlert
