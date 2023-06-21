/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Alert, VStack } from '@chakra-ui/react'
import IronAlert from 'components/IronAlert'
import IconInfo from 'svgx/common/icon-info'

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>

export const AlertSample: ComponentStory<FC> = () => {
  return (
    <VStack>
      <IronAlert
        icon={<IconInfo />}
        title="Descriptive alert"
        description="descriptive description"
        actions={<h4>UNDO</h4>}
      />
      <IronAlert
        variant="descriptive"
        icon={<IconInfo />}
        title="Descriptive alert"
        description="descriptive description"
        actions={<h4>UNDO</h4>}
      />
    </VStack>
  )
}

AlertSample.args = {
  duration: undefined,
}
