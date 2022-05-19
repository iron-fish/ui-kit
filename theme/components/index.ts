import type { ComponentStyleConfig } from '@chakra-ui/theme'

import Autocomplete from './Autocomplete'
import Badge from './Badge'
import Button from './Button'
import ColorModeSwitcher from './ColorModeSwitcher'
import FieldGroup from './FieldGroup'
import SearchAutocomplete from './SearchAutocomplete'
import SelectField from './SelectField'
import Input from './Input'
import Link from './Link'
import Menu from './Menu'
import Option from './Option'
import Table from './Table'
import Tabs from './Tabs'
import TextField from './TextField'
import Tooltip from './Tooltip'

const ThemedComponents: Record<string, ComponentStyleConfig> = {
  Autocomplete,
  Badge,
  Button,
  ColorModeSwitcher,
  FieldGroup,
  SelectField,
  SearchAutocomplete,
  Input,
  Link,
  Menu,
  Option,
  Table,
  Tabs,
  TextField,
  Tooltip,
}

export default ThemedComponents
