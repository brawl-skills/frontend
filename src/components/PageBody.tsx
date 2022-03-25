import React from 'react'
import { Flex, GridItem, Heading } from '@chakra-ui/react'

export default function PageBody() {
  return (
    <GridItem>
      <Flex bg="gray.800" h="100%" justify="center" align="center">
        <Heading
          size="2xl"
          as="h2"
          bgGradient="linear(to-l, #FDA1FA, #9FF7FE, #D7FCCA)"
          bgClip="text"
        >
          Brawl Skills
        </Heading>
      </Flex>
    </GridItem>
  )
}
