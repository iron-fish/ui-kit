import { FC, useRef, SFC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  chakra,
  Badge,
  useBreakpointValue,
  useDimensions,
} from '@chakra-ui/react'
import theme from 'theme/theme'

export default {
  title: 'Components/Breakpoints',
  component: Badge,
} as ComponentMeta<typeof Badge>

type Offset = {
  label: string
  offset: string
}

const HorizontalRuler: SFC<Offset> = ({ offset, label }) => (
  <chakra.div
    position="fixed"
    borderLeft="1px dashed lime"
    width="0"
    height="100vh"
    top={0}
    left={offset}
    _before={{
      content: `"${label}"`,
      textAlign: 'center',
      width: '3rem',
      transform: 'rotate(-90deg)',
      backgroundColor: 'lime',
      display: 'inline-block',
      padding: '0.5rem',
      marginLeft: '-0.5rem',
      marginTop: '0.5rem',
      fontSize: '0.75rem',
    }}
  />
)
/*
const VerticalRuler: SFC<Offset> = ({ offset }) => (
  <chakra.div
    borderTop="1px dashed lime"
    height="0"
    width="100vw"
    left={0}
    top={offset}
  />
)

interface DirectionalOffset extends Offset {
  direction: 'horizontal' | 'vertical'
}

const Ruler: SFC<DirectionalOffset> = ({ offset, direction, label }) =>
  direction === 'horizontal' ? (
    <HorizontalRuler offset={offset} label={label} />
  ) : (
    <VerticalRuler offset={offset} label={label} />
    )
 */

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
  // eslint-disable-next-line no-console
  console.log({ theme })
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
