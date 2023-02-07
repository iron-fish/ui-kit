import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InfoBadge from 'components/InfoBadge'

export default {
  title: 'Components/InfoBadge',
  component: InfoBadge,
} as ComponentMeta<typeof InfoBadge>

export const InfoBadgeSample: ComponentStory<FC> = () => {
  return <InfoBadge message="Badge" />
}
