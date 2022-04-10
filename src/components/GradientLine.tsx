/* eslint-disable react/require-default-props */
import {
  Flex,
  Text,
  Box,
  Heading,
  BackgroundProps,
  SpaceProps,
  LayoutProps,
} from '@chakra-ui/react'

const selectColor = (
  cursorText: string
): BackgroundProps['bgGradient'] | '' => {
  const num = parseInt(cursorText, 10)

  if (!Number.isNaN(num)) {
    if (num === 40) return 'linear(to-r, #FC8181,#FC8181)'
    if (num < 45) return 'linear(to-r, #FC8181, #F6AD55)'
    if (num === 45) return 'linear(to-r, #F6AD55, #F6AD55)'
    if (num < 50) return 'linear(to-r, #F6AD55, #F6E05E)'
    if (num === 50) return 'linear(to-r, #F6E05E, #F6E05E)'
    if (num < 55) return 'linear(to-r, #F6E05E, #68D391)'
    if (num === 55) return 'linear(to-r, #68D391, #68D391)'
    if (num < 60) return 'linear(to-r, #68D391, #B794F4)'
    if (num === 60) return 'linear(to-r, #B794F4,#B794F4)'
  }
  if (cursorText === '<40%') return 'linear(to-r, #f13d3d, #FC8181)'
  if (cursorText === '>60%') return 'linear(to-r, #B794F4, #8554e7)'
  return ''
}

export default function GradientLine({
  variant,
  cursorPos = 25,
  cursorText = 'Error',
  w = 'auto',
  mt,
}: GradientLineProps): JSX.Element {
  const isPlayer = variant === 'player'

  return (
    <Flex
      direction="column"
      align={isPlayer ? 'center' : 'normal'}
      w={w}
      mt={mt}
    >
      <Flex pb={2} display={isPlayer ? 'none' : 'flex'}>
        <Flex flex={1} justify="center">
          <Text as="b" color="orange.300">
            45%
          </Text>
        </Flex>
        <Flex flex={1} justify="center">
          <Text as="b" color="green.300">
            55%
          </Text>
        </Flex>
      </Flex>
      <Box
        h={3}
        w={{ base: '80%', md: '100%' }}
        borderRadius="full"
        bgGradient="linear(to-r, #FC8181, #F6AD55, #F6E05E, #68D391, #B794F4)"
        pos="relative"
      >
        <Box
          pos="absolute"
          h="1.75rem"
          w="0.5rem"
          left={`calc(${cursorPos}% - 0.25rem)`}
          bottom="calc(50% - 0.875rem)"
          bg="white"
          boxShadow="0px 0px 6px rgba(0, 0, 0, 0.5)"
          borderRadius="full"
          display={isPlayer ? 'block' : 'none'}
        >
          <Heading
            pos="absolute"
            bottom={7}
            left={-8}
            bgGradient={selectColor(cursorText)}
            bgClip="text"
          >
            {cursorText}
          </Heading>
        </Box>
      </Box>
      <Flex pt={2} display={isPlayer ? 'none' : 'flex'}>
        <Flex flex={1} justify="flex-start" pl={{ base: 2, md: 8 }}>
          <Text as="b" color="red.300">
            40%
          </Text>
        </Flex>
        <Flex flex={1} justify="center">
          <Text as="b" color="yellow.300">
            50%
          </Text>
        </Flex>
        <Flex flex={1} justify="flex-end" pr={{ base: 2, md: 8 }}>
          <Text as="b" color="purple.300">
            60%
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

interface GradientLineProps {
  variant: 'player' | 'about'
  cursorPos?: number
  cursorText?: string
  w?: LayoutProps['w']
  mt?: SpaceProps['mt']
}
