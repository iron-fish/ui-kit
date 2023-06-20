/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { Link, VStack } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Button>

export const LinkComponents: ComponentStory<FC> = () => (
  <VStack align={'flex-start'}>
    <Link href="#">Text link</Link>
    <Link href="#" variant="underlined">
      Underlined Text link
    </Link>
  </VStack>
)
