/* eslint-disable react/require-default-props */
import { Flex, FlexOptions, GridItem, SpaceProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function PageBody({
  children,
  justify = 'center',
  align = 'center',
  dir = 'row',
  px = { base: 2, md: 32 },
}: PageBodyProps) {
  return (
    <GridItem mt="64px">
      <Flex h="100%" direction={dir} justify={justify} align={align} px={px}>
        {children}
      </Flex>
    </GridItem>
  )
}

interface PageBodyProps {
  children: ReactNode
  justify?: FlexOptions['justify']
  align?: FlexOptions['align']
  dir?: FlexOptions['direction']
  px?: SpaceProps['px']
}
