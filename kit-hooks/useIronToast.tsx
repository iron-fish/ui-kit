import { useMemo } from 'react'
import {
  useChakra,
  UseToastOptions,
  createToastFn,
  CreateToastFnReturn,
} from '@chakra-ui/react'
import IronAlert from '../components/IronAlert'

export function useIronToast(
  defaultOptions?: UseToastOptions
): CreateToastFnReturn {
  const { theme } = useChakra()

  return useMemo(
    () =>
      createToastFn(theme.direction, {
        render: props => <IronAlert {...props} />,
        ...defaultOptions,
      }),
    [defaultOptions, theme.direction]
  )
}

export default useIronToast
