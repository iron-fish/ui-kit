import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Alert, VStack } from '@chakra-ui/react'
import IronAlert from 'components/IronAlert'
import IconInfo from 'svgx/common/icon-info'

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>

export const AlertSample: ComponentStory<FC> = () => {
  return (
    <VStack>
      <IronAlert
        icon={<IconInfo />}
        title="Descriptive alert"
        description="descriptive description"
        actions={<h4>UNDO</h4>}
      />
      <IronAlert
        variant="descriptive"
        icon={<IconInfo />}
        title="Descriptive alert"
        description="descriptive description"
        actions={<h4>UNDO</h4>}
      />
    </VStack>
  )
}

AlertSample.args = {
  duration: undefined,
}
