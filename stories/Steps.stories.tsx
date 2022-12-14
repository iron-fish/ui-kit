import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Step, useSteps } from 'chakra-ui-steps'
import { Flex, Box, Button } from '@chakra-ui/react'
import Steps from 'components/Steps'

export default {
  title: 'Components/Steps',
  component: Steps,
  argTypes: {
    orientation: {
      options: [undefined, 'horizontal', 'vertical'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Steps>

const Content: FC<{ number: number }> = ({ number }) => (
  <Flex py={4}>
    <Box p={1} border="1px solid" w="100%">
      <h4>Step {number} content</h4>
    </Box>
  </Flex>
)

const steps = [1, 2, 3]

export const StepsExample: ComponentStory<typeof Steps> = args => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep} {...args}>
        {steps.map(number => (
          <Step label={`Step ${number}`} key={`Step ${number}`}>
            <Content number={number} />
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

StepsExample.args = {
  orientation: undefined,
}
