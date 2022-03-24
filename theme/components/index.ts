import type { ComponentStyleConfig } from '@chakra-ui/theme'

import FieldGroup from './FieldGroup'
import Table from './Table'
import TextField from './TextField'
import Button from './Button'
import Menu from './Menu'
import Input from './Input'

const ThemedComponents: Record<string, ComponentStyleConfig> = {
  FieldGroup,
  Table,
  TextField,
  Button,
  Menu,
  Input,
}

export default ThemedComponents
