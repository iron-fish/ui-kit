/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Progress, Flex, Box, VStack } from '@chakra-ui/react'

export default {
  title: 'Components/Progress',
  component: Progress,
} as ComponentMeta<typeof Progress>

export const ProgressStory: ComponentStory<FC> = () => (
  <Flex w="100%" direction="column" gap="1rem">
    <Box>
      <h4>Default</h4>
      <VStack>
        <Progress value={20} w="100%" />
        <Progress isIndeterminate={true} w="100%" />
      </VStack>
    </Box>
    <Box>
      <h4>BLUE</h4>
      <VStack>
        <Progress value={20} w="100%" variant="ironBlue" />
        <Progress w="100%" isIndeterminate={true} variant="ironBlue" />
      </VStack>
    </Box>
    <Box>
      <h4>LIGHT_BLUE</h4>
      <VStack>
        <Progress value={20} w="100%" variant="ironLightBlue" />
        <Progress w="100%" isIndeterminate={true} variant="ironLightBlue" />
      </VStack>
    </Box>
  </Flex>
)
