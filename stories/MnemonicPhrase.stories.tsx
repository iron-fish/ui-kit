/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC, useEffect, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VStack, Box, Flex } from '@chakra-ui/react'
import { MnemonicView, CopyToClipboardButton } from 'components'

export default {
  title: 'Components/MnemonicView',
  component: MnemonicView,
} as ComponentMeta<typeof MnemonicView>

const words = [
  'carrot',
  'stick',
  'papercut',
  'phone',
  'keyboard',
  'walkway',
  'uppercut',
  'ball',
  'pants',
  'test',
  'grass',
  'milk',
  'carrot',
  'stick',
  'papercut',
  'phone',
  'keyboard',
  'walkway',
  'uppercut',
  'ball',
  'pants',
  'test',
  'grass',
  'milk',
]

interface HeaderProps {
  value: string
  showCopyButton?: boolean
}

const Header: FC<HeaderProps> = ({ value, showCopyButton }) => (
  <Flex gap="0.4375rem" alignItems="center">
    <h6>Mnemonic phrase</h6>
    {showCopyButton && (
      <CopyToClipboardButton
        value={value}
        copyTooltipText="CopyToClipBoard"
        copiedTooltipText="Copied"
      />
    )}
  </Flex>
)

export const MnemonicViewBasic: ComponentStory<FC> = args => {
  const [showCopyButton, setShowCopyButton] = useState(true)
  const [phrase, setPhrase] = useState(words)

  return (
    <MnemonicView
      header={
        <Header value={phrase.join(' ')} showCopyButton={showCopyButton} />
      }
      value={phrase}
      w="600px"
      toolTipProps={{
        label: 'Secret phrase',
      }}
      wordsAmount={24}
      onBlinkingEyeClick={() => setShowCopyButton(!showCopyButton)}
      onChange={newPhrase => {
        setPhrase(newPhrase)
      }}
      isInvalidInputs={phrase.map(i => !i)}
      {...args}
    />
  )
}

MnemonicViewBasic.args = {
  isReadOnly: true,
  loaded: true,
  isInvalid: false,
  showInfoIcon: true,
}

export const MnemonicViewTemplate: ComponentStory<FC> = () => {
  const [phrase, setPhrase] = useState([])
  const [secondPhrase, setSecondPhrase] = useState([])
  const [loading, setLoading] = useState(false)
  const [showCopyButton, setShowCopyButton] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setPhrase(words)
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <VStack w="100%" flexDirection="column" spacing={16} mb="6rem">
      <MnemonicView
        header={
          <Header value={phrase.join(' ')} showCopyButton={showCopyButton} />
        }
        value={phrase}
        w="600px"
        toolTipProps={{
          label: 'Secret phrase',
        }}
        isReadOnly={true}
        loaded={!loading}
        wordsAmount={24}
        onBlinkingEyeClick={setShowCopyButton}
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
          wordsAmount={24}
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
          wordsAmount={24}
        />
      </Box>
      <Box>
        <h4>Invalid mode</h4>
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
          isInvalid={true}
          isInvalidInputs={secondPhrase.map(i => !i)}
          wordsAmount={24}
        />
      </Box>
    </VStack>
  )
}
