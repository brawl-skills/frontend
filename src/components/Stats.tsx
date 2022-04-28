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
} from '@chakra-ui/react'

export default function Stats({ data, isLoading }: StatsProps) {
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
      w="100%"
    >
      {splitStats.map((arr) => (
        <Wrap
          direction={{ base: 'row', md: 'column' }}
          spacing={{ base: 8, md: 16 }}
        >
          {arr.map(({ title, value, percent, arrow }) => (
            <Stat
              title={title}
              value={value}
              percent={percent}
              arrow={arrow}
              isLoading={isLoading}
            />
          ))}
        </Wrap>
      ))}
    </Stack>
  )
}

function Stat({ title, value, percent, arrow, isLoading }: StatProps) {
  return (
    <ChakraStat>
      <StatLabel fontSize={{ base: 'lg', md: 'xl' }}>{title}</StatLabel>
      <Skeleton isLoaded={!isLoading}>
        <StatNumber>
          <Heading fontSize={{ base: '4xl', md: '5xl' }}>{value}</Heading>
        </StatNumber>
        <StatHelpText fontSize={{ base: 'sm', md: 'md' }}>
          <StatArrow type={arrow === 'up' ? 'increase' : 'decrease'} />
          {percent}%
        </StatHelpText>
      </Skeleton>
    </ChakraStat>
  )
}

// Types
Stat.defaultProps = {
  isLoading: false,
}

Stats.defaultProps = {
  isLoading: false,
}

export type Tinfo = {
  title: string
  value: number
  percent: number
  arrow: 'up' | 'down'
}

interface StatProps extends Tinfo {
  isLoading?: true | false
}

export interface StatsProps {
  data: Array<StatProps>
  isLoading?: true | false
}
