/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, timeoutMs: number): T {
  const [$debouncedValue, $setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handle = setTimeout(() => {
      $setDebouncedValue(value)
    }, timeoutMs)

    return () => {
      clearTimeout(handle)
    }
  }, [value, timeoutMs])

  return $debouncedValue
}

export default useDebounce
