/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect } from 'react'
import { Stack, Box, Flex, Heading } from '@chakra-ui/react'

// Components
import PageBody from '../components/PageBody'
import ChartBox from '../components/ChartBox'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

// Graphs
import LineChart from '../components/charts/LineChart'

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
        title="Распеределение игроков по уровням"
        desc="График показывает 
        распределение игроков 
        на разных игровых уровнях."
        graph={<PlayerByLvl />}
      />
      <ChartBox
        title="Количество игроков за последние сутки"
        desc="График с колличеством игроков в разные часы за последние сутки."
        graph={<PlayerByLvl />}
      />
      <ChartBox
        title="Самый популярный боец за сутки"
        desc="Радиальная диаграмма показывает количество игр на разных персонажах за сутки."
        graph={<PlayerByLvl />}
      />
    </Stack>
  )
}

function PlayerByLvl() {
  return <LineChart xLableText="Игровой уровень" yLabelText="Кол-во игроков" />
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
