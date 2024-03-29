/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

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
import ThreeDotsIcon from 'svgx/common/three-dots-icon'

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
        <ThreeDotsIcon display="block" w="100%" />
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
