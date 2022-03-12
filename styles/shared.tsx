/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import type { ReactNode } from 'react'
import { css } from '@emotion/react'

interface CodeProps {
  children: ReactNode
  pre?: boolean
  json?: boolean
}

export const El = {
  pre: styled('pre')`
    font-family: mono-regular;
  `,
  code: styled('code')`
    font-family: mono-regular;
  `,
}

export const Code = ({ children, pre = true, json = false }: CodeProps) => {
  const raw = json ? JSON.stringify(children, null, 2) : children
  return pre ? (
    <El.pre>
      <El.code>{raw}</El.code>
    </El.pre>
  ) : (
    <El.code>raw</El.code>
  )
}

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`
export const flexRow = css`
  display: flex;
  flex-direction: row;
`
export const alignLeft = css`
  text-align: left;
`
export const alignRight = css`
  text-align: right;
`
