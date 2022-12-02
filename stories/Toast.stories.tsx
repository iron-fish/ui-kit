import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Alert, Button } from '@chakra-ui/react'
import useIronToast from '../kit-hooks/useIronToast'
import IconInfo from 'svgx/icon-info'

export default {
  title: 'Components/Toast',
  component: Alert,
  argTypes: {
    duration: {
      options: [10000, 100000, undefined],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Alert>

const SIMPLE_TOAST_VARIANTS = [
  {
    icon: <IconInfo />,
    title: 'Simple toast with icon and action and description',
    description: 'Toast with icon and action and description',
    actions: <h4>UNDO</h4>,
  },
  {
    icon: <IconInfo />,
    title: 'Simple toast with icon and action',
    actions: <h4>UNDO</h4>,
  },
  {
    icon: <IconInfo />,
    title: 'Simple toast with icon',
  },
  {
    title: 'Simple toast',
  },
]

const DESCRIPTIVE_TOAST_VARIANT = [
  {
    icon: <IconInfo />,
    title: 'Descriptive toast',
    description: 'Descriptive toast with icon and description and action',
    variant: 'descriptive',
    actions: <h4>UNDO</h4>,
  },
  {
    icon: <IconInfo />,
    title: 'Descriptive toast',
    description: 'Descriptive with icon and description',
    variant: 'descriptive',
  },
  {
    icon: <IconInfo />,
    title: 'Descriptive toast with icon',
    variant: 'descriptive',
  },
  {
    title: 'Descriptive toast',
    variant: 'descriptive',
  },
]

export const ToastSample: ComponentStory<FC> = args => {
  const ironToast = useIronToast()

  const renderToast = toastProps => (
    <Button onClick={() => ironToast({ ...toastProps, ...args })}>
      {toastProps.title}
    </Button>
  )

  return (
    <>
      <h3>Click the button to see Toast</h3>
      <Flex w="min-content" gap="32px" mt="16px" direction="column">
        {SIMPLE_TOAST_VARIANTS.concat(DESCRIPTIVE_TOAST_VARIANT).map(
          renderToast
        )}
      </Flex>
    </>
  )
}

ToastSample.args = {
  duration: undefined,
}
