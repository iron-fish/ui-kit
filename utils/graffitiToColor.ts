/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const fishAvatarColors = [
  '#FFAFAF',
  '#94ED6B',
  '#A3E9FF',
  '#7657CE',
  '#E7B453',
  '#54FF17',
  '#1D4423',
  '#D46161',
  '#AFF1FF',
  '#F1CB00',
]

export function graffitiToColor(graffiti: string): string {
  // djb2 (xor)
  let hash = 5381

  for (let i = 0; i < graffiti.length; i++) {
    hash = (hash * 33) ^ graffiti.charCodeAt(i)
  }

  return fishAvatarColors[(hash >>> 0) % fishAvatarColors.length]
}
