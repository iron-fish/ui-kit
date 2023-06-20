/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

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
