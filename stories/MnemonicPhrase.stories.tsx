import { FC, useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VStack, Box, Flex } from '@chakra-ui/react'
import { MnemonicView, CopyToClipboardButton } from 'components'

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

interface HeaderProps {
  value: string
}

const Header: FC<HeaderProps> = ({ value }) => (
  <Flex gap="0.4375rem" alignItems="baseline">
    <h3>Mnemonic phrase</h3>
    <CopyToClipboardButton
      value={value}
      copyTooltipText="CopyToClipBoard"
      copiedTooltipText="Copied"
    />
  </Flex>
)

export const MnemonicViewTemplate: ComponentStory<FC> = () => {
  const [phrase, setPhrase] = useState([])
  const [secondPhrase, setSecondPhrase] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setPhrase(words)
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <VStack w="100%" flexDirection="column" spacing={16}>
      <MnemonicView
        header={<Header value={phrase.join(', ')} />}
        value={phrase}
        w="600px"
        toolTipProps={{
          label: 'Secret phrase',
        }}
        isReadOnly={true}
        visible
        loaded={!loading}
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
      <Box>
        <h4>Loading state</h4>
        <MnemonicView
          header="Mnemonic phrase"
          placeholder="Empty"
          value={phrase}
          w="37.5rem"
          toolTipProps={{
            label: 'Secret phrase',
          }}
          isReadOnly={true}
          loaded={false}
        />
      </Box>
    </VStack>
  )
}
