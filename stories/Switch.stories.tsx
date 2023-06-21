/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { ComponentMeta } from '@storybook/react'
import { Switch, FormControl, FormLabel } from '@chakra-ui/react'

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

export function SwitchStory() {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        Switch demo
      </FormLabel>
      <Switch id="email-alerts" />
    </FormControl>
  )
}
