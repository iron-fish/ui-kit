import { chakra } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface CodeProps {
  children: ReactNode
  pre?: boolean
  json?: boolean
}
const mono = { baseStyle: { fontFamily: 'mono-regular' } }

export const El = {
  pre: chakra('pre', mono),
  code: chakra('code', mono),
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
