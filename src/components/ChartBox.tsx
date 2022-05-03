import { Box, Stack, Text, Skeleton } from '@chakra-ui/react'

export default function ChartBox({ title, graph, isLoading }: ChartBoxProps) {
  const chartSize = { base: '320px', md: '350px' }
  return (
    <Stack w={chartSize} align="center">
      <Text fontSize="xl" as="b" textAlign="center" w={72}>
        {title}
      </Text>
      <Skeleton isLoaded={!isLoading}>
        <Box w={chartSize} h={chartSize} bg="gray.900" borderRadius="md" p={2}>
          {graph}
        </Box>
      </Skeleton>
    </Stack>
  )
}

// Types
ChartBox.defaultProps = {
  isLoading: false,
}

interface ChartBoxProps {
  title: string
  graph: JSX.Element
  isLoading?: boolean
}
