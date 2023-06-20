/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { FC, useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box, HStack, Button, Stack } from '@chakra-ui/react'
import TextField from 'components/TextField'
import FieldGroup from 'components/FieldGroup'
import ColorModeSwitcher from 'components/ColorModeSwitcher'
import IconCopy from 'svgx/common/icon-copy'
import IconEye from 'svgx/common/icon-eye'
import IconInfo from 'svgx/common/icon-info'
import { NAMED_COLORS } from 'theme/constants'

export default {
  title: 'Components/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>

const PasswordInput: FC = () => {
  const [show, setShow] = useState(false)

  return (
    <TextField
      label="Example password"
      InputProps={{
        type: show ? 'text' : 'password',
        placeholder: 'Enter password',
      }}
      w="50%"
      my={1}
      RightAddons={
        <HStack marginLeft={'2.5rem'} spacing={'0.875rem'}>
          <IconEye
            cursor={'pointer'}
            crossed={show}
            onClick={() => setShow(!show)}
          />
          <IconInfo cursor={'pointer'} />
        </HStack>
      }
    />
  )
}

export const BasicExample: ComponentStory<FC> = () => (
  <Stack>
    <Box>
      <h3>Text Field Example</h3>
      <h4>Base</h4>
      <TextField label="Example 1" w="50%" my={1} />
      <h4>With IconButton</h4>
      <TextField
        label="Example 1"
        w="50%"
        my={1}
        LeftAddons={<ColorModeSwitcher />}
      />
      <TextField
        label="Example 1"
        w="50%"
        my={1}
        RightAddons={<ColorModeSwitcher />}
      />
      <h4>Password input</h4>
      <PasswordInput />
    </Box>
    <Box>
      <h3>Text Field Group Example</h3>
      <h4>Buttons on the left</h4>
      <FieldGroup w="50%" my={1}>
        <Button
          px="1.5rem"
          textColor={NAMED_COLORS.LIGHT_BLUE}
          leftIcon={<IconCopy w="16px" h="16px" />}
        >
          Copy
        </Button>
        <TextField label="Group Example" />
      </FieldGroup>
      <h4>Buttons on the right</h4>
      <FieldGroup w="50%" my={1}>
        <TextField label="Group Example" />
        <Button
          px="1.5rem"
          textColor={NAMED_COLORS.LIGHT_BLUE}
          rightIcon={<IconCopy w="16px" h="16px" />}
        >
          Copy
        </Button>
      </FieldGroup>
      <h4>Two inputs</h4>
      <FieldGroup w="50%" my={1}>
        <TextField label="Group Example 1" />
        <TextField label="Group Example 2" />
      </FieldGroup>
    </Box>
  </Stack>
)
