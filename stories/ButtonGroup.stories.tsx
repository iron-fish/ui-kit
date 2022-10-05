import { FC } from 'react'
import { VStack } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ButtonsGroup } from 'components'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonsGroup,
} as ComponentMeta<typeof ButtonsGroup>

export const ButtonGroup: ComponentStory<FC> = () => (
  <VStack>
    <ButtonsGroup
      menuItems={[
        {
          key: 'create-account',
          label: 'Create account',
          onClick: () => alert('create account'),
        },
        {
          key: 'import-account',
          label: 'Import account',
          onClick: () => alert('import account'),
        },
      ]}
    />
  </VStack>
)
