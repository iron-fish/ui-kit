import { ReactType, createElement } from 'react'
import '@testing-library/jest-dom'
import * as React from 'react'
import { render as defaultRender, RenderOptions } from '@testing-library/react'

import IronFishUIProvider from 'components/IronFishUIProvider'

const fallbackGlobalObject = {}
export function isNodeEnv(): boolean {
  return (
    Object.prototype.toString.call(
      typeof process !== 'undefined' ? process : 0
    ) === '[object process]'
  )
}

export function getGlobalObject<T>(): T {
  return (
    isNodeEnv()
      ? global
      : typeof window !== 'undefined'
      ? window
      : typeof self !== 'undefined'
      ? self
      : fallbackGlobalObject
  ) as T
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const rasterizeWithProps = (C: ReactType, props: Record<string, any>) =>
  createElement(C, props, props.children || [])

export const makeRendererFor = (C: ReactType) => (props: Record<string, any>) =>
  defaultRender(rasterizeWithProps(C, props))

const ChakraRenderer: React.FC = ({
  children,
}: React.PropsWithChildren<Record<string, any>>) => {
  return <IronFishUIProvider>{children}</IronFishUIProvider>
}

export const render = (C: any, options?: Omit<RenderOptions, 'wrapper'>) =>
  defaultRender(C, {
    wrapper: ChakraRenderer,
    ...options,
  })
/* eslint-enable @typescript-eslint/no-explicit-any */

// export const mockFetch = lookupFn => jest.fn().mockImplementation(lookupFn)
