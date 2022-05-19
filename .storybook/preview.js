import IronFishUIProvider from 'components/IronFishUIProvider'
import { ColorModeSwitcher } from 'components/ColorModeSwitcher'
import { Box, Flex, chakra } from '@chakra-ui/react'

export const decorators = [
  Story => (
    <IronFishUIProvider>
      <Box id="story-wrapper" minHeight="100vh">
        <Flex
          justify="flex-end"
          mb={4}
          position="fixed"
          bottom="2rem"
          right="2rem"
        >
          <ColorModeSwitcher withBorder={true} />
        </Flex>
        {Story()}
      </Box>
    </IronFishUIProvider>
  ),
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
