import React from 'react';
import IronFishUIProvider from 'components/IronFishUIProvider';
import ColorModeSwitcher from 'components/ColorModeSwitcher';
import { Flex } from '@chakra-ui/react'

export const decorators = [
  (Story) => (
    <IronFishUIProvider>
      <div id='story-wrapper' style={{ minHeight: '100vh' }}>
        <Flex justify='flex-end' mb={4}>
          <ColorModeSwitcher />
        </Flex>
        <Story />
      </div>
    </IronFishUIProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}