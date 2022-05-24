import { FC, useRef } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Badge, useBreakpointValue, useDimensions } from '@chakra-ui/react'
import HorizontalRuler from 'components/Breakpoints/Horizontal'
import theme from 'theme/theme'

const Demo: FC = () => {
  const size = useBreakpointValue([
    'base',
    'sm',
    'sm1',
    'md',
    'lg',
    'xl',
    '2xl',
  ])
  const elementRef = useRef(document.body)
  const bodyDimension = useDimensions(elementRef, true)
  return (
    <>
      {Object.entries(theme.breakpoints).map(([k, v]: [string, string]) => (
        <HorizontalRuler offset={v} label={k} key={k} />
      ))}
      <Badge w={'100%'} mt="3rem">
        {size}:{' '}
        {bodyDimension?.borderBox.width + bodyDimension?.padding.right + 1}
        {'px'}
      </Badge>
    </>
  )
}

export const Breakpoints: ComponentStory<FC> = () => <Demo />

export default {
  title: 'Components/Breakpoints',
  component: Demo,
} as ComponentMeta<typeof Demo>
