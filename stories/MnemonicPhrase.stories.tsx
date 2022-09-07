import { FC, useEffect, useState } from 'react'
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

export const MnemonicViewTemplate: ComponentStory<FC> = () => {
  const [phrase, setPhrase] = useState([])
  const [secondPhrase, setSecondPhrase] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setPhrase(words)
    }, 3000)
  }, [])

  return (
    <VStack w="100%" flexDirection="column" spacing={16}>
      <MnemonicView
        header="Mnemonic phrase"
        value={phrase}
        w="600px"
        toolTipProps={{
          label: 'Secret phrase',
        }}
        isReadOnly={true}
        visible
      />
      <Box>
        <h4>Input mode</h4>
        <MnemonicView
          header="Mnemonic phrase"
          placeholder="Empty"
          value={secondPhrase}
          w="600px"
          toolTipProps={{
            label: 'Secret phrase',
          }}
          isReadOnly={false}
          onChange={newPhrase => setSecondPhrase(newPhrase)}
        />
      </Box>
    </VStack>
  )
}
