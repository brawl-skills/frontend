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
} from '@chakra-ui/react'

// Components
import PageBody from '../components/PageBody'
import ChartBox from '../components/ChartBox'
import Stats, { Tinfo } from '../components/Stats'

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
      <Stats data={levelStats} isLoading={isLoading} />
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
          Выбранный уровень
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

const levelStats: Array<Tinfo> = [
  { title: 'Кубки', value: random(1000, 20000), arrow: 'up', percent: 30.1 },
  {
    title: 'Игроки',
    value: random(500, 30000),
    arrow: 'down',
    percent: 12.2,
  },
  { title: 'Гаджеты', value: random(0, 100), arrow: 'up', percent: 3.2 },
  {
    title: 'Кубки/Перс.',
    value: random(10, 600),
    arrow: 'up',
    percent: 18.8,
  },
  { title: 'Персонажи', value: random(1, 60), arrow: 'down', percent: 1.2 },
  {
    title: 'Звездная сила',
    value: random(1, 100),
    arrow: 'up',
    percent: 0.2,
  },
]

function Graphs({ isLoading }: GraphsProps) {
  return (
    <Stack
      w="100%"
      my={8}
      align={{ base: 'center', md: 'normal' }}
      justifyContent={{ base: 'normal', md: 'space-evenly' }}
      spacing={{ base: 8, md: 0 }}
      direction={{ base: 'column', md: 'row' }}
    >
      <ChartBox
        title="Процент наличия определенных персонажей"
        graph={<HavingBrawler />}
        isLoading={isLoading}
      />
      <ChartBox
        title="Процент наличия определенных персонажей"
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

interface LevelSelectProps {
  level: number
  setLevel: React.Dispatch<React.SetStateAction<number>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

interface GraphsProps {
  isLoading: boolean
}
