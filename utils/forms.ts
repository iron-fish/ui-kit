/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { ChangeEvent, Dispatch, SetStateAction } from 'react'

// naive validators

// reusable default value
export const UNSET = ''

// emails should have an @ sign and dot that isn't at the end
export const validateEmail = (x: string) => {
  const dot = x.indexOf('.')
  return x.indexOf('@') > 0 && dot > 0 && dot !== x.length - 1
}

// non-zero width strings
export const exists = (x: string) => x.trim().length > 0

// reusable error text
export const defaultErrorText = `This field is required`

// take a setter and turn it into an event handler which sets
export function setStateOnChange(setter: Dispatch<SetStateAction<string>>) {
  return (e: ChangeEvent) => {
    setter((e.target as HTMLInputElement).value)
  }
}
