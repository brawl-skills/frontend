import {
  Wrap,
  Stat as ChakraStat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Skeleton,
  Heading,
  Stack,
  StackProps,
  Box,
} from '@chakra-ui/react'

export default function Stats({ data, isLoading, mt }: StatsProps) {
  // Split data for 3 arrays
  const splitStats = [
    data.filter((_, i) => i + 1 <= data.length / 3),
    data.filter(
      (_, i) => i + 1 <= (data.length / 3) * 2 && i + 1 > data.length / 3
    ),
    data.filter((_, i) => i + 1 > (data.length / 3) * 2),
  ]

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={{ base: 8, md: 16 }}
      justify="center"
      mt={mt}
    >
      {splitStats.map((arr) => (
        <Wrap
          key={`${arr[0].title}${arr.length}`}
          direction={{ base: 'row', md: 'column' }}
          spacing={{ base: 12, md: 16 }}
        >
          {arr.map(({ title, value, percent, arrow, isColored }) => (
            <Stat
              key={title}
              title={title}
              value={value}
              percent={percent}
              arrow={arrow}
              isColored={isColored}
              isLoading={isLoading}
            />
          ))}
        </Wrap>
      ))}
    </Stack>
  )
}

function Stat({
  title,
  value,
  percent,
  arrow,
  isLoading,
  isColored,
}: StatProps) {
  return (
    <ChakraStat>
      <StatLabel fontSize={{ base: 'lg', md: 'xl' }}>{title}</StatLabel>
      <Skeleton isLoaded={!isLoading}>
        <StatNumber>
          <Heading
            fontSize={{ base: '4xl', md: '5xl' }}
            bgGradient={
              isColored ? 'linear(to-r, #9F7AEA, #F687B3)' : undefined
            }
            bgClip={isColored ? 'text' : undefined}
            display={isColored ? 'inline' : 'block'}
          >
            {value}
            {isColored}
          </Heading>
        </StatNumber>
        {arrow !== undefined && percent !== undefined ? (
          <StatHelpText fontSize={{ base: 'sm', md: 'md' }}>
            <StatArrow type={arrow === 'up' ? 'increase' : 'decrease'} />
            {percent}%
          </StatHelpText>
        ) : (
          <Box h={6} w={1} mb={2} />
        )}
      </Skeleton>
    </ChakraStat>
  )
}

// Types
Stat.defaultProps = {
  isColored: false,
  isLoading: false,
  arrow: undefined,
  percent: undefined,
}

Stats.defaultProps = {
  isLoading: false,
}

export type Tinfo = {
  title: string
  value: number
  percent?: number | undefined
  arrow?: 'up' | 'down' | undefined
  isColored?: boolean
}

interface StatProps extends Tinfo {
  isLoading?: true | false
}

export interface StatsProps extends StackProps {
  data: Array<StatProps>
  isLoading?: true | false
}
