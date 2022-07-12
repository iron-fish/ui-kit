import type { ComponentStyleConfig } from '@chakra-ui/theme'

import Autocomplete from './Autocomplete'
import Button from './Button'
import ColorModeSwitcher from './ColorModeSwitcher'
import Checkbox from './Checkbox'
import FieldGroup from './FieldGroup'
import SearchAutocomplete from './SearchAutocomplete'
import SelectField from './SelectField'
import Input from './Input'
import Kbd from './Kbd'
import Link from './Link'
import Menu from './Menu'
import MnemonicView from './MnemonicView'
import Option from './Option'
import Table from './Table'
import Tabs from './Tabs'
import TextField from './TextField'
import Tooltip from './Tooltip'

const ThemedComponents: Record<string, ComponentStyleConfig> = {
  Autocomplete,
  Button,
  ColorModeSwitcher,
  Checkbox,
  FieldGroup,
  SelectField,
  SearchAutocomplete,
  Input,
  Kbd,
  Link,
  Menu,
  MnemonicView,
  Option,
  Table,
  Tabs,
  TextField,
  Tooltip,
}

export default ThemedComponents
