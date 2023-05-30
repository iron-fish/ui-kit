import { ComponentMeta } from '@storybook/react'
import { Switch, FormControl, FormLabel } from '@chakra-ui/react'

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

export function SwitchStory() {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        Switch demo
      </FormLabel>
      <Switch id="email-alerts" />
    </FormControl>
  )
}
