import { FC } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex, Grid, Text } from '@chakra-ui/react'
import ArrowDownLeft from 'svgx/arrow-down-left'
import ArrowUpRight from 'svgx/arrow-up-right'
import IconBook from 'svgx/icon-book'
import IconBulb from 'svgx/icon-bulb'
import IconHome from 'svgx/icon-home'
import IconMiner from 'svgx/icon-miner'
import IconNode from 'svgx/icon-node'

export default {
  title: 'Components/Icons',
  component: Flex,
} as ComponentMeta<typeof Tooltip>

const getIconDemo = (icon, iconName) => (
  <Flex direction="column" align="center">
    {icon}
    <Text pt="5px">{iconName}</Text>
  </Flex>
)

export const Icons: ComponentStory<FC> = () => (
  <Grid gap={5} gridTemplateColumns="repeat( auto-fit, minmax(150px, 1fr) )">
    {getIconDemo(<ArrowDownLeft />, 'ArrowDownLeft')}
    {getIconDemo(<ArrowUpRight />, 'ArrowUpRight')}
    {getIconDemo(<IconBook />, 'IconBook')}
    {getIconDemo(<IconBulb />, 'IconBulb')}
    {getIconDemo(<IconHome />, 'IconHome')}
    {getIconDemo(<IconMiner />, 'IconMiner')}
    {getIconDemo(<IconNode />, 'IconNode')}
  </Grid>
)
