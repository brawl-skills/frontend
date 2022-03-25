import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

export default function Main() {
  return (
    <Flex bg="gray.800" h="100%" justify="center" align="center">
      <Text
        bgGradient="linear(to-l, #FDA1FA, #9FF7FE, #D7FCCA)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="bold"
      >
        Brawl Stats
      </Text>
    </Flex>
  )
}
