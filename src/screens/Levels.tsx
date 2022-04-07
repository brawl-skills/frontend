/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { useState, useEffect } from 'react'
import {
  Heading,
  Flex,
  Stack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stat,
  StatLabel,
  StatArrow,
  StatNumber,
  StatHelpText,
  Skeleton,
} from '@chakra-ui/react'

// Components
import PageBody from '../components/PageBody'
import ChartBox from '../components/ChartBox'

// Graphs
import PieChart from '../components/charts/PieChart'
import BarChart, { BarDataType } from '../components/charts/BarChart'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

// Helper functions
import random from '../helper/random'
import randBrawlerName from '../helper/randBrawlerName'
import randPieColor from '../helper/randomColor'

export default function Levels() {
  const dispatch = useMyDispatch()
  const [level, setLevel] = useState(30)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(setPage('lvl'))
  }, [dispatch])
  return (
    <PageBody dir="column">
      <LevelSelect level={level} setLevel={setLevel} setLoading={setLoading} />
      <Stats isLoading={isLoading} />
      <Graphs isLoading={isLoading} />
    </PageBody>
  )
}

function LevelSelect({ level, setLevel, setLoading }: LevelSelectProps) {
  return (
    <Stack
      direction="column"
      w="100%"
      pt={20}
      pb={{ base: 16, md: 20 }}
      align="center"
      spacing={{ base: 16, md: 12 }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        position="relative"
        pr={{ base: 0, md: 8 }}
      >
        <Heading textAlign="center" size="2xl">
          Выбраный уровень
        </Heading>
        <Flex
          minW="6em"
          position={{ base: 'static', md: 'absolute' }}
          right="-4.5em"
          justify={{ base: 'center', md: 'flex-start' }}
        >
          <Heading
            size="2xl"
            bgGradient="linear(to-r, #9F7AEA, #F687B3)"
            bgClip="text"
            w="fit-content"
          >
            {level}
          </Heading>
        </Flex>
      </Flex>
      <Flex w={{ base: '80%', md: '400px' }}>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={level}
          onChange={(v) => {
            setLoading(true)
            setLevel(v ?? null)
          }}
          onChangeEnd={() => setLoading(false)}
        >
          <SliderTrack bg="gray.300">
            <SliderFilledTrack bgGradient="linear(to-r, #9F7AEA, #F687B3)" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Flex>
    </Stack>
  )
}

function Stats({ isLoading }: StatsProps) {
  const levelStats: Array<StatType> = [
    { title: 'Кубки', number: random(1000, 20000), arrow: 'up', percent: 30.1 },
    {
      title: 'Игроки',
      number: random(500, 30000),
      arrow: 'down',
      percent: 12.2,
    },
    { title: 'Гаджеты', number: random(0, 100), arrow: 'up', percent: 3.2 },
    {
      title: 'Кубки/Перс.',
      number: random(10, 600),
      arrow: 'up',
      percent: 18.8,
    },
    { title: 'Персонажи', number: random(1, 60), arrow: 'down', percent: 1.2 },
    {
      title: 'Звездная сила',
      number: random(1, 100),
      arrow: 'up',
      percent: 0.2,
    },
  ]

  levelStats.forEach((e, i) => {
    levelStats[i].arrow = random(0, 1) === 1 ? 'up' : 'down'
    levelStats[i].percent = Number((random(1, 200) / 100).toFixed(1))
  })

  return (
    <Stack w="100%">
      <Stack direction="row" display={{ base: 'none', md: 'flex' }}>
        {levelStats.map((e, i) => {
          if (i === 2) return <StatBlock isLoading={isLoading} {...e} />
          if (i < 3)
            return (
              <>
                <StatBlock isLoading={isLoading} {...e} />
                <Flex flex="1" />
              </>
            )
          return null
        })}
      </Stack>
      <Stack direction="row" display={{ base: 'none', md: 'flex' }}>
        {levelStats.map((e, i) => {
          if (i === 5) return <StatBlock isLoading={isLoading} {...e} />
          if (i > 2)
            return (
              <>
                <StatBlock isLoading={isLoading} {...e} />
                <Flex flex="1" />
              </>
            )
          return null
        })}
      </Stack>
      <Stack display={{ base: 'flex', md: 'none' }}>
        {levelStats.map((e, i) => {
          if (i % 2 === 0)
            return (
              <MobileStats
                isLoading={isLoading}
                left={e}
                right={levelStats[i + 1]}
              />
            )
          return null
        })}
      </Stack>
    </Stack>
  )
}

function Graphs({ isLoading }: GraphsProps) {
  return (
    <Stack
      w="100%"
      mt={8}
      align={{ base: 'center', md: 'normal' }}
      justifyContent={{ base: 'normal', md: 'space-evenly' }}
      spacing={{ base: 8, md: 0 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <ChartBox
        title="Процент наличия определенных персонажей"
        desc="Круговая диаграмма, где каждый сектор отвечает за определенного персонажа."
        graph={<HavingBrawler />}
        isLoading={isLoading}
      />
      <ChartBox
        title="Процент наличия определенных персонажей"
        desc="Круговая диаграмма, где каждый сектор отвечает за определенного персонажа."
        graph={<TrophiesByBrawler />}
        isLoading={isLoading}
      />
    </Stack>
  )
}

function HavingBrawler() {
  // @ts-ignore
  const dataset: Array<PieDataType> = [...Array(5).keys()]
  let totalPercent = 100

  dataset.forEach((e, i) => {
    if (i !== dataset.length - 1) {
      const percent = random(0, totalPercent)
      totalPercent -= percent
      dataset[i] = {
        title: randBrawlerName(),
        count: percent,
        color: randPieColor(),
      }
    } else
      dataset[i] = {
        title: randBrawlerName(),
        count: totalPercent,
        color: randPieColor(),
      }
  })

  return <PieChart dataset={dataset} tooltipAfter="%" />
}

function TrophiesByBrawler() {
  // @ts-ignore
  const dataset: Array<BarDataType> = [...Array(10).keys()]

  dataset.forEach((e, i) => {
    dataset[i] = {
      data1: random(0, 600),
      data2: random(1, 11),
      name: randBrawlerName(),
    }
  })
  return <BarChart data1Name="Кубки" data2Name="Сила" dataset={dataset} />
}

function MobileStats({ left, right, isLoading }: MobileStatsProps) {
  return (
    <Flex>
      <StatBlock isLoading={isLoading} {...left} />
      <Flex flex={1} />
      {right ? (
        <StatBlock isLoading={isLoading} {...right} />
      ) : (
        <Flex flex={1} />
      )}
    </Flex>
  )
}

function StatBlock({
  title,
  number,
  arrow,
  percent,
  isLoading,
}: StatBlockProps) {
  return (
    <Stat flex="1">
      <StatLabel fontSize={{ base: 'lg', md: 'xl' }}>{title}</StatLabel>
      <Skeleton isLoaded={!isLoading}>
        <StatNumber>
          <Heading fontSize={{ base: '4xl', md: '5xl' }}>{number}</Heading>
        </StatNumber>
        <StatHelpText fontSize={{ base: 'sm', md: 'md' }}>
          <StatArrow type={arrow === 'up' ? 'increase' : 'decrease'} />
          {percent}%
        </StatHelpText>
      </Skeleton>
    </Stat>
  )
}

interface MobileStatsProps {
  left: StatType
  right: StatType | null
  isLoading: boolean
}

interface StatType {
  title: string
  number: number
  arrow: 'up' | 'down'
  percent: number
}

interface LevelSelectProps {
  level: number
  setLevel: React.Dispatch<React.SetStateAction<number>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface GraphsProps {
  isLoading: boolean
}

interface StatsProps {
  isLoading: boolean
}

interface StatBlockProps extends StatType {
  isLoading: boolean
}
