import { FC } from 'react'
// import { render } from '@testing-library/react'
import { chakra } from '@chakra-ui/react'
import '@testing-library/jest-dom'

import { render } from 'jest.utils'

const Basic: FC = () => <chakra.strong>cool</chakra.strong>

test('smoke test', () => {
  // expect(COMPONENTS).toBeTruthy()
  const rendered = render(<Basic />)
  expect(rendered.container).toMatchSnapshot()
})
