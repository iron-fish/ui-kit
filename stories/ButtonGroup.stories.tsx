/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { VStack } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonsGroup } from 'components'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonsGroup,
} as ComponentMeta<typeof ButtonsGroup>

export const ButtonGroup: ComponentStory<FC> = () => (
  <VStack>
    <ButtonsGroup
      menuItems={[
        {
          key: 'create-account',
          label: 'Create account',
          onClick: () => alert('create account'),
        },
        {
          key: 'import-account',
          label: 'Import account',
          onClick: () => alert('import account'),
        },
      ]}
    />
  </VStack>
)
