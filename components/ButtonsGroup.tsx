import { FC, ReactNode, MouseEvent } from 'react'
import {
  ButtonProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemProps,
  MenuList,
  MenuListProps,
  MenuProps,
} from '@chakra-ui/react'
import ThreeDotsIcon from 'svgx/three-dot-icon'

export interface MenuItemsType {
  key: string
  label: ReactNode
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

interface ButtonsGroupProps {
  menuItems: MenuItemsType[]
  menuProps?: MenuProps
  menuButtonProps?: ButtonProps
  menuListProps?: MenuListProps
  menuItemProps?: MenuItemProps
}

const ButtonsGroup: FC<ButtonsGroupProps> = ({
  menuItems,
  menuProps,
  menuButtonProps,
  menuListProps,
  menuItemProps,
}) => {
  return (
    <Menu {...menuProps}>
      <MenuButton {...menuButtonProps}>
        <ThreeDotsIcon mb="5px" mr="3px" />
      </MenuButton>
      <MenuList {...menuListProps}>
        {menuItems.map(({ key, label, onClick }) => (
          <MenuItem key={key} onClick={onClick} {...menuItemProps}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default ButtonsGroup
