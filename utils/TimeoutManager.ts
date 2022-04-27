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
