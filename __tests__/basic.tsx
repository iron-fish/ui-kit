/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC } from 'react'
import { chakra } from '@chakra-ui/react'
import '@testing-library/jest-dom'

import { render } from 'jest.utils'

const Basic: FC = () => <chakra.strong>cool</chakra.strong>

test('smoke test', () => {
  // expect(COMPONENTS).toBeTruthy()
  const rendered = render(<Basic />)
  expect(rendered.container).toMatchSnapshot()
})
