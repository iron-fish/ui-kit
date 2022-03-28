import type { ComponentStyleConfig } from '@chakra-ui/theme'

import Autocomplete from './Autocomplete'
import FieldGroup from './FieldGroup'
import Table from './Table'
import TextField from './TextField'
import Button from './Button'
import Menu from './Menu'

const ThemedComponents: Record<string, ComponentStyleConfig> = {
  Autocomplete,
  FieldGroup,
  Table,
  TextField,
  Button,
  Menu,
}

export default ThemedComponents
