/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

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
      <Flex background={headerColor} p="4rem 2rem" w="100%" textAlign="left">
        {title}
      </Flex>
      {children}
    </>
  )
}

export default Showcase
