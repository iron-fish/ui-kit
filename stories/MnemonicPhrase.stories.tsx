import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex } from '@chakra-ui/react'
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

export const BlockTable: ComponentStory<FC> = () => (
  <Flex w="100%" flexDirection="column" p="4">
    <MnemonicView
      header="Mnemonic phrase"
      words={words}
      w="600px"
      toolTipProps={{
        label: 'Secret phrase',
      }}
    />
  </Flex>
)
