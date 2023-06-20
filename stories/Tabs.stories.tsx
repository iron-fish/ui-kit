/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>

export const TabsComponent: ComponentStory<FC> = () => (
  <Tabs>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
      <Tab isDisabled={true}>Disabled</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
)
