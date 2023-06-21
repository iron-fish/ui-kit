/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * Adds an ordinal suffix to a given number, e.g. 1 -> 1st
 */
export function numberToOrdinal(num: number): string {
  // From https://stackoverflow.com/a/13627586
  const j = num % 10
  const k = num % 100

  if (j === 1 && k !== 11) {
    return `${num}st`
  }
  if (j == 2 && k != 12) {
    return `${num}nd`
  }
  if (j == 3 && k != 13) {
    return `${num}rd`
  }
  return `${num}th`
}
