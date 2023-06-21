/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

export class TimeoutManager {
  timeout: NodeJS.Timeout | undefined

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute(callback: (...args: any[]) => any, delay: number) {
    this.timeout = setTimeout(callback, delay)
  }

  cancel() {
    this.timeout && clearTimeout(this.timeout)
  }
}

export default TimeoutManager
