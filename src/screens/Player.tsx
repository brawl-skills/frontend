/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  Stack,
  Heading,
  Image,
  Button,
  useToast,
  StackProps,
} from '@chakra-ui/react'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

// Components
import PageBody from '../components/PageBody'
import GradientLine from '../components/GradientLine'
import Stats, { Tinfo } from '../components/Stats'
import ChartBox from '../components/ChartBox'
import BarChart from '../components/charts/BarChart'

// Helper functions
import random from '../helper/random'
import randBrawlerName from '../helper/randBrawlerName'

export default function Player() {
  const dispatch = useMyDispatch()
  const { playerName } = useParams()

  const getCursorText = (score: number): string => {
    if (score >= 40 && score <= 60) return `${score}%`
    if (score < 40) return '<40%'
    if (score > 60) return '>60%'
    return 'Error'
  }
  const getCursorPos = (score: number): number => {
    if (score >= 40 && score <= 60) return Math.ceil((score - 40) / 0.2)
    if (score < 40) return 0
    if (score > 60) return 100
    return 50
  }

  const tag = '#PVY9CUYJY'
  const iconId = 28000079
  const percentScore = random(37, 63)
  const cursorPos = getCursorPos(percentScore)
  const cursorText = getCursorText(percentScore)

  useEffect(() => {
    dispatch(setPage('player'))
  }, [dispatch])

  return (
    <PageBody dir="column">
      <ShortInfo iconId={iconId} name={playerName} tag={tag} />
      <GradientLine
        w="100%"
        variant="player"
        cursorPos={cursorPos}
        cursorText={cursorText}
        mt={14}
      />
      <Stats data={playerStats} mt={16} />
      <Graphs mt={16} />
    </PageBody>
  )
}

function ShortInfo({ iconId, name, tag }: ShortInfoProps) {
  const toast = useToast()
  const handleTagClick = () => {
    // Copy tag to clipboard
    navigator.clipboard.writeText(tag)

    // Show toast
    toast({
      title: 'Тег сохранен.',
      description: `Тег "${tag}" сохранен в буфер обмена.`,
      status: 'success',
      duration: 6000,
      isClosable: true,
    })
  }
  return (
    <Stack direction="row" mt={12}>
      <Image
        src={`${process.env.PUBLIC_URL}/player-icons/${iconId}.png`}
        borderRadius="md"
        boxSize="100px"
      />
      <Stack>
        <Heading color="#f05637" size="2xl">
          {name}
        </Heading>
        <Button size="sm" onClick={handleTagClick}>
          {tag}
        </Button>
      </Stack>
    </Stack>
  )
}

function Graphs({ mt }: StackProps) {
  return (
    <Stack direction={{ base: 'column', lg: 'row' }} mt={mt} spacing={16}>
      <ChartBox
        title="Кубки персонажей"
        desc="Столбчатый график со всеми персонажами игрока, где ось Y это кубки."
        graph={<TrophiesByBrawler />}
      />
      <ChartBox
        title="Сила персонажей"
        desc="Столбчатый график со всеми персонажами игрока, где ось Y это уровень сила."
        graph={<PowerByBrawler />}
      />
      <ChartBox
        title="Гаджеты и Звездная сила"
        desc="Столбчатый график со всеми персонажами игрока, где ось Y это кол-во открытых доп. способностей."
        graph={<SpecialsByBrawler />}
      />
    </Stack>
  )
}

function TrophiesByBrawler() {
  // @ts-ignore
  const dataset: Array<BarDataType> = [...Array(10).keys()]

  dataset.forEach((_, i) => {
    dataset[i] = {
      data1: random(100, 600),
      name: randBrawlerName(),
    }
  })
  return <BarChart data1Name="Кубки" dataset={dataset} />
}
function PowerByBrawler() {
  // @ts-ignore
  const dataset: Array<BarDataType> = [...Array(10).keys()]

  dataset.forEach((_, i) => {
    dataset[i] = {
      data1: random(0, 11),
      name: randBrawlerName(),
    }
  })
  return <BarChart data1Name="Сила" dataset={dataset} />
}
function SpecialsByBrawler() {
  // @ts-ignore
  const dataset: Array<BarDataType> = [...Array(10).keys()]

  dataset.forEach((_, i) => {
    dataset[i] = {
      data1: random(0, 2),
      data2: random(0, 1),
      name: randBrawlerName(),
    }
  })
  return (
    <BarChart data1Name="Гаджеты" data2Name="Звездная сила" dataset={dataset} />
  )
}

const playerStats: Array<Tinfo> = [
  { title: 'Кубки', value: random(1000, 20000), arrow: 'up', percent: 30.1 },
  {
    title: 'Кубки/Перс.',
    value: random(300, 500),
    arrow: 'down',
    percent: 12.2,
  },
  { title: 'Уровень', value: random(20, 80), isColored: true },
  {
    title: 'Персонажи',
    value: random(10, 600),
    arrow: 'up',
    percent: 18.8,
  },
  { title: 'Гаджеты', value: random(1, 60), arrow: 'down', percent: 1.2 },
  {
    title: 'Звездная сила',
    value: random(1, 100),
    arrow: 'up',
    percent: 0.2,
  },
]

// Types
interface ShortInfoProps {
  iconId: number
  name: string | undefined
  tag: string
}
