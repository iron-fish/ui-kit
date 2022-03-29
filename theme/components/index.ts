import type { ComponentStyleConfig } from '@chakra-ui/theme'

import FieldGroup from './FieldGroup'
import SelectField from './SelectField'
import Table from './Table'
import TextField from './TextField'
import Button from './Button'
import Menu from './Menu'
import Input from './Input'

const ThemedComponents: Record<string, ComponentStyleConfig> = {
  FieldGroup,
  SelectField,
  Table,
  TextField,
  Button,
  Menu,
  Input,
}

export default ThemedComponents
