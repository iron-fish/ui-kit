/* eslint-disable react/prop-types */
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
  actionsButton?: ReactNode
}

const IronAlert: React.FC<IronToastProps> = props => {
  const {
    status,
    variant = 'simple',
    id,
    title,
    description,
    icon,
    actionsButton,
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
      {actionsButton && <Box sx={styles.actionsButton}>{actionsButton}</Box>}
    </Alert>
  )
}

export default IronAlert
