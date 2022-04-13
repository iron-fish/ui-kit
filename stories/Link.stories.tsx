import { FC } from 'react'
import { Link } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Button>

export const LinkComponents: ComponentStory<FC> = () => (
  <>
    <Link>Text link</Link>
  </>
)
