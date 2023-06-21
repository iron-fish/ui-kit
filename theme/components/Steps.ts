/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { SystemStyleFunction, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { StepsStyleConfig } from 'chakra-ui-steps'
import { TYPEFACES } from 'styles/type'

const baseStyleDescription: SystemStyleFunction = props => ({
  ...StepsStyleConfig.baseStyle(props).description,
  ...TYPEFACES.H5,
  fontSize: '1.2rem,',
})

const baseStyleLabel: SystemStyleFunction = props => ({
  ...StepsStyleConfig.baseStyle(props).label,
  ...TYPEFACES.H6,
  fontSize: '0.8rem',
})

const Steps = {
  ...StepsStyleConfig,
  baseStyle: (props: StyleFunctionProps) => ({
    ...StepsStyleConfig.baseStyle(props),
    label: baseStyleLabel(props),
    description: baseStyleDescription(props),
  }),
}

export default Steps
