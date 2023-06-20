/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Card, CardBody, CardFooter, chakra } from '@chakra-ui/react'
import { NAMED_COLORS } from '../theme/constants'

export default {
  title: 'Components',
  component: Card,
} as ComponentMeta<typeof Card>

export const Colors: ComponentStory<FC> = () => (
  <>
    <chakra.h2>Color Constants</chakra.h2>
    <Flex w="100%" wrap="wrap" gap={'1rem'} mb="1rem">
      {Object.keys(NAMED_COLORS).map(colorName => (
        <Card key={colorName} h="6rem" w="12rem">
          <CardBody
            bg={NAMED_COLORS[colorName]}
            borderRadius="0.25rem"
          ></CardBody>
          <CardFooter
            p="0.25rem"
            textAlign="center"
            borderTop="1px solid"
            borderColor="lightgray"
          >
            <chakra.code>{colorName}</chakra.code>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  </>
)
