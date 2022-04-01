import { Box, Stack, Text } from '@chakra-ui/react'

export default function ChartBox({ title, desc, graph }: ChartBoxProps) {
  const chartSize = { base: '300px', md: '350px' }
  return (
    <Stack w={chartSize}>
      <Text fontSize="xl" as="b" textAlign="center" h={16}>
        {title}
      </Text>
      <Box w={chartSize} h={chartSize} bg="gray.900" borderRadius="md" p={2}>
        {graph}
      </Box>
      <Text fontSize="xl">{desc}</Text>
    </Stack>
  )
}

interface ChartBoxProps {
  title: string
  desc: string
  graph: JSX.Element
}
