/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, Flex, Card, CardBody, chakra } from '@chakra-ui/react'

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>

export const IronFishCards: ComponentStory<FC> = () => (
  <>
    <chakra.h2>Basic examples</chakra.h2>
    <Flex w="100%" wrap="wrap" gap={'1rem'} mb="1rem">
      <Box h="5.5rem" w="12.5rem" layerStyle="card" p="1rem" textAlign="center">
        Layer style
        <br />
        <chakra.code>card</chakra.code>
      </Box>
      <Card variant="ironFish" h="5.5rem" w="12.5rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironFish</chakra.code>
        </CardBody>
      </Card>
    </Flex>
    <chakra.h2>Color Cards</chakra.h2>
    <Flex w="100%" wrap="wrap" gap={'1rem'}>
      <Card variant="ironfish-violet-card" h="5.5rem" w="15rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironfish-violet-card</chakra.code>
        </CardBody>
      </Card>
      <Card variant="ironfish-pistachio-card" h="5.5rem" w="15rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironfish-pistachio-card</chakra.code>
        </CardBody>
      </Card>
      <Card variant="ironfish-skyblue-card" h="5.5rem" w="15rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironfish-skyblue-card</chakra.code>
        </CardBody>
      </Card>
      <Card variant="ironfish-sandy-card" h="5.5rem" w="15rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironfish-sandy-card</chakra.code>
        </CardBody>
      </Card>
      <Card variant="ironfish-pink-card" h="5.5rem" w="15rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironfish-pink-card</chakra.code>
        </CardBody>
      </Card>
      <Card variant="ironfish-lemon-card" h="5.5rem" w="15rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironfish-lemon-card</chakra.code>
        </CardBody>
      </Card>
      <Card variant="ironfish-beige-card" h="5.5rem" w="15rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironfish-beige-card</chakra.code>
        </CardBody>
      </Card>
      <Card variant="ironfish-royalblue-card" h="5.5rem" w="15rem">
        <CardBody p="1rem" textAlign="center">
          Variant
          <br />
          <chakra.code>ironfish-royalblue-card</chakra.code>
        </CardBody>
      </Card>
    </Flex>
  </>
)
