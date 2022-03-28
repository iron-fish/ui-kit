import type { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

export type ShowcaseProps = {
  headerColor: string
  title: ReactNode
  children: ReactNode
}

export function Showcase({ headerColor, title, children }: ShowcaseProps) {
  return (
    <>
      <Flex
        background={headerColor}
        p="4rem 2rem"
        w="calc(100% - 4rem)"
        textAlign="left"
      >
        {title}
      </Flex>
      {children}
    </>
  )
}

export default Showcase
