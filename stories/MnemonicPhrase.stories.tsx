import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VStack, Box } from '@chakra-ui/react'
import { MnemonicView } from 'components'

export default {
  title: 'Components/MnemonicView',
  component: MnemonicView,
} as ComponentMeta<typeof MnemonicView>

const words = [
  'Carrot',
  'Stick',
  'Papercut',
  'Phone',
  'Keyboard',
  'Walkway',
  'Uppercut',
  'Ball',
  'Pants',
  'Test',
  'Grass',
  'Milk',
]

export const MnemonicViewTemplate: ComponentStory<FC> = () => (
  <VStack w="100%" flexDirection="column" spacing={16}>
    <MnemonicView
      header="Mnemonic phrase"
      value={words}
      w="600px"
      toolTipProps={{
        label: 'Secret phrase',
      }}
      isReadOnly={true}
    />
    <Box>
      <h4>Input mode</h4>
      <MnemonicView
        header="Mnemonic phrase"
        placeholder="Empty"
        w="600px"
        toolTipProps={{
          label: 'Secret phrase',
        }}
        isReadOnly={false}
        onChange={currentWords => console.log(currentWords)}
      />
    </Box>
  </VStack>
)
