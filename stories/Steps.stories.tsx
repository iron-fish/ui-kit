import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Step, useSteps } from 'chakra-ui-steps'
import { Flex, Box, Button } from '@chakra-ui/react'
import Steps from 'components/Steps'

export default {
  title: 'Components/Steps',
  component: Steps,
} as ComponentMeta<typeof Steps>

const Content: FC<{ number: number }> = ({ number }) => (
  <Flex py={4}>
    <Box p={1} border="1px solid" w="100%">
      <h4>Step {number} content</h4>
    </Box>
  </Flex>
)

const steps = [1, 2, 3]

const BaseStepsExample: ComponentStory<typeof Steps> = args => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep} {...args}>
        {steps.map(number => (
          <Step
            label={`Step ${number}`}
            key={`Step ${number}`}
            description={`Description for step ${number}`}
          >
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

export const HorizontalStepExample = () => <BaseStepsExample />

export const VerticalStepExample = () => (
  <BaseStepsExample orientation="vertical" />
)

export const LoadingStepsExample: ComponentStory<typeof Steps> = args => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep} state={'loading'} {...args}>
        {steps.map(number => (
          <Step
            label={`Step ${number}`}
            key={`Step ${number}`}
            description={`${
              activeStep === number - 1 ? 'Loading' : 'Description for'
            } step ${number}`}
            sx={{
              '& > div:first-of-type': {
                w: '8rem'
              }
            }}
          >
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
