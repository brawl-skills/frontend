/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect } from 'react'
import {
  Stack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

// Components
import PageBody from '../components/PageBody'
import GradientLine from '../components/GradientLine'

export default function About() {
  const dispatch = useMyDispatch()

  useEffect(() => {
    dispatch(setPage('about'))
  }, [dispatch])
  return (
    <PageBody justify="flex-start" dir="column">
      <Heading as="h1" size="2xl" my={9}>
        Рейтинг
      </Heading>
      <Stack spacing={8}>
        <Text as="p" fontSize="xl">
          <Text as="b">Рейтинг</Text> — это значение, получаемое при сравнении
          ряда параметров игрового аккаунта со средними значениями,
          рассчитанными на основе собранных нами данных о игроках на том же
          игровом уровне.
        </Text>
        <Text as="p" fontSize="xl">
          Список учитываемых параметров и их вес:
        </Text>
        <UnorderedList pl={8} fontSize="xl" spacing={2}>
          <ListItem>Кубки игрока (вес 60%)</ListItem>
          <ListItem>Колличество открытых персонажей (вес 25%)</ListItem>
          <ListItem>Колличество открытой звездной силы (вес 10%)</ListItem>
          <ListItem>Колличество открытых гаджетов (вес 5%)</ListItem>
        </UnorderedList>
        <Text as="p" fontSize="xl">
          Цветовая градация в зависимости от цветового значения:
        </Text>
        <GradientLine variant="about" />
        <Text as="p" fontSize="xl">
          Пример пояснение: если по результатам подсчетов рейтинга, полученные
          значения полностью совпадают со средними значениями игроков того же
          уровня, то в таком случае игровой аккаунт получит оценку{' '}
          <Text as="b" color="yellow.300">
            50%
          </Text>
          .
        </Text>
      </Stack>
      <Heading as="h1" size="2xl" my={9}>
        О команде и идее
      </Heading>
      <Stack spacing={8}>
        <Text as="p" fontSize="xl">
          Разработка проекта началась в феврале 2022 года, в качестве курсвой
          работы в вузе. На данный момент с нами работают 5 студентов МТУСИ,
          помогая каждый день улучшать пользовательский опыт. Следить за жизнью
          проекта в реальном времени можно в нашем Github репозитории.
        </Text>
        <Text as="p" fontSize="xl">
          Brawl Skills был вдохновлен модом{' '}
          <Link isExternal href="https://modxvm.com/" color="purple.500">
            XVM
          </Link>{' '}
          созданным для игры World Of Tanks.
        </Text>
      </Stack>
    </PageBody>
  )
}
