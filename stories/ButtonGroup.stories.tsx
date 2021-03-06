import { FC } from 'react'
import { Menu, MenuButton, MenuItem, MenuList, Icon } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const DemoThreeDotsIcon: FC = () => (
  <Icon w={7} viewBox="0 0 28 28" style={{ marginBottom: 5, marginRight: 3 }}>
    <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967   C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967   s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967   c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z" />
  </Icon>
)

export default {
  title: 'Components/ButtonGroup',
  component: Menu,
} as ComponentMeta<typeof Menu>

export const ButtonGroup: ComponentStory<FC> = () => (
  <Menu>
    <MenuButton>
      <DemoThreeDotsIcon />
    </MenuButton>
    <MenuList>
      <MenuItem>Create account</MenuItem>
      <MenuItem>import Account</MenuItem>
    </MenuList>
  </Menu>
)
