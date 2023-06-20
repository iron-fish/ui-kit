/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC, useRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Badge, useBreakpointValue, useDimensions } from '@chakra-ui/react'

export default {
  title: 'Components/Breakpoints',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Demo: FC = () => {
  const size = useBreakpointValue([
    'base',
    'sm',
    'sm1',
    'md',
    'lg',
    'xl',
    '2xl',
  ])
  const elementRef = useRef(document.body)
  const bodyDimension = useDimensions(elementRef, true)

  return (
    <Badge w={'100%'}>
      {size}:{' '}
      {bodyDimension?.borderBox.width + bodyDimension?.padding.right + 1}
    </Badge>
  )
}

export const Breakpoints: ComponentStory<FC> = () => <Demo />
