import { FC } from 'react'
import { Link, VStack } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Button>

export const LinkComponents: ComponentStory<FC> = () => (
  <VStack align={'flex-start'}>
    <Link>Text link</Link>
    <Link variant="underlined">Underlined Text link</Link>
  </VStack>
)
