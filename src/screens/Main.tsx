/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect } from 'react'
import { Stack, Box, Flex, Heading } from '@chakra-ui/react'

// Components
import PageBody from '../components/PageBody'
import ChartBox from '../components/ChartBox'

// Graphs
import LineChart, { LineDataType } from '../components/charts/LineChart'
import PieChart, { PieDataType } from '../components/charts/PieChart'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

// Helper functions
import random from '../helper/random'
import randBrawlerName from '../helper/randBrawlerName'
import randPieColor from '../helper/randomColor'

export default function Main() {
  const dispatch = useMyDispatch()

  useEffect(() => {
    dispatch(setPage('main'))
  }, [dispatch])
  return (
    <PageBody dir="column">
      <OnlinePlayers />
      <Graphs />
    </PageBody>
  )
}

function Graphs() {
  return (
    <Stack direction={{ base: 'column', lg: 'row' }} spacing={16}>
      <ChartBox
        title="Распределение игроков по уровням"
        desc="График показывает 
        распределение игроков 
        на разных игровых уровнях."
        graph={<PlayerByLvl />}
      />
      <ChartBox
        title="Количество игроков за последние сутки"
        desc="График с колличеством игроков в разные часы за последние сутки."
        graph={<PlayerByHours />}
      />
      <ChartBox
        title="Самый популярный боец за сутки"
        desc="Радиальная диаграмма показывает количество игр на разных персонажах за сутки."
        graph={<BestBrawlerBy24H />}
      />
    </Stack>
  )
}

function PlayerByLvl() {
  // @ts-ignore
  const dataset: Array<LineDataType> = [...Array(10).keys()]

  dataset.forEach((e, i) => {
    dataset[i] = {
      x: (i + 1) * 10,
      y: random(1000, 5000),
    }
  })
  return (
    <LineChart
      xTitle="Игровой уровень"
      yTitle="Кол-во игроков"
      yShortTitle="Игроков"
      dataset={dataset}
      textColor="#FBB6CE"
    />
  )
}

function PlayerByHours() {
  // @ts-ignore
  const dataset: Array<LineDataType> = [...Array(12).keys()]

  dataset.forEach((e, i) => {
    dataset[i] = {
      x: new Date(i * 7200 * 1000)
        .toLocaleTimeString('ru', { timeZone: 'UTC' })
        .slice(0, 5),
      y: random(1000, 5000),
    }
  })
  return (
    <LineChart
      xTitle="Время"
      yTitle="Кол-во игроков"
      yShortTitle="Игроков"
      dataset={dataset}
      textColor="#9DECF9"
    />
  )
}

function BestBrawlerBy24H() {
  // @ts-ignore
  const dataset: Array<PieDataType> = [...Array(5).keys()]

  dataset.forEach((e, i) => {
    dataset[i] = {
      title: randBrawlerName(),
      count: random(1000, 6000),
      color: randPieColor(),
    }
  })
  return <PieChart dataset={dataset} tooltipAfter=" игр" />
}

function OnlinePlayers() {
  return (
    <Stack
      direction="row"
      justify="center"
      align="center"
      spacing={4}
      py={20}
      flexWrap="wrap"
    >
      <Flex align="center">
        <OnlineLight />
        <Heading as="h1" ml={4} size="4xl">
          927,632
        </Heading>
      </Flex>
      <Heading as="h3" size="xl">
        игроков онлайн
      </Heading>
    </Stack>
  )
}

function OnlineLight() {
  return (
    <Box
      w="24px"
      h="24px"
      bg="green.400"
      borderRadius="full"
      boxShadow="0px 0px 10px #68D391"
    />
  )
}
