/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const BASE_FONT_SIZE = 16
export const asPx = (x: string) =>
  `${parseFloat(x.slice(0, -3)) * BASE_FONT_SIZE}px`
