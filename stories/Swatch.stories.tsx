import { ComponentStory, ComponentMeta } from '@storybook/react'

import Swatch from 'components/Swatch'

export default {
  title: 'Components/Swatch',
  component: Swatch,
} as ComponentMeta<typeof Swatch>

export const SwatchDemo: ComponentStory<typeof Swatch> = () => (
  <Swatch name="custom" hex="#cc0000" />
)
