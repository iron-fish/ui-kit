import {
  IconButton,
  useColorMode,
  useStyleConfig,
  chakra,
} from '@chakra-ui/react'
import { SFC, Fragment } from 'react'
import IconDarkMode from 'svgx/icon-darkmode'
import IconLightMode from 'svgx/icon-lightmode'

type Bordered = {
  withBorder?: boolean
}

export const ColorModeSwitcher: SFC<Bordered> = ({ withBorder = false }) => {
  const { colorMode: $colorMode, toggleColorMode: $toggleColorMode } =
    useColorMode()
  const styles = useStyleConfig('ColorModeSwitcher')
  const El = withBorder ? chakra.div : Fragment
  const wrapperProps = withBorder
    ? {
        borderRadius: '100rem',
        border: `1px solid ${$colorMode === 'dark' ? 'white' : 'black'}`,
        width: '3rem',
        height: '3rem',
        display: 'flex',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        flexDirection: 'column' as any,
        alignItems: 'center',
        justifyContent: 'center',
      }
    : {}
  return (
    <El {...wrapperProps}>
      <IconButton
        aria-label="Color mode"
        icon={$colorMode === 'dark' ? <IconLightMode /> : <IconDarkMode />}
        onClick={$toggleColorMode}
        sx={styles}
      />
    </El>
  )
}

const Unbordered = () => <ColorModeSwitcher withBorder={false} />
export default Unbordered
