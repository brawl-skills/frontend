import { Flex, GridItem } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function PageBody({ children }: PageBodyProps) {
  return (
    <GridItem>
      <Flex bg="gray.800" h="100%" justify="center" align="center">
        {children}
      </Flex>
    </GridItem>
  )
}

interface PageBodyProps {
  children: ReactNode
}
