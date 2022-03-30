/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect } from 'react'
import {
  Stack,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Flex,
  Box,
  Link,
} from '@chakra-ui/react'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

// Components
import PageBody from '../components/PageBody'

export default function About() {
  const dispatch = useMyDispatch()

  useEffect(() => {
    dispatch(setPage('about'))
  }, [dispatch])
  return (
    <PageBody justify="flex-start" dir="column" px={{ base: 8, md: 32 }}>
      <Heading as="h1" size="2xl" my={9}>
        Рейтинг
      </Heading>
      <Stack spacing={8}>
        <Text as="p" fontSize="xl">
          <Text as="b">Рейтинг</Text> — это значение, получаемое при сравнение
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
        <GradientLine />
      </Stack>
      <Heading as="h1" size="2xl" my={9}>
        О команде и идеи
      </Heading>
      <Stack spacing={8}>
        <Text as="p" fontSize="xl">
          Разработка проекта началась в февраля 2022 года, в качестве курсвой
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

function GradientLine() {
  return (
    <Flex direction="column">
      <Flex pb={2}>
        <Flex flex={1} justify="center">
          <Text as="b" color="orange.300">
            45%
          </Text>
        </Flex>
        <Flex flex={1} justify="center">
          <Text as="b" color="green.300">
            55%
          </Text>
        </Flex>
      </Flex>
      <Box
        h={3}
        w="100%"
        borderRadius="full"
        bgGradient="linear(to-r, #FC8181, #F6AD55, #F6E05E, #68D391, #B794F4)"
      />
      <Flex pt={2}>
        <Flex flex={1} justify="flex-start" pl={8}>
          <Text as="b" color="red.300">
            40%
          </Text>
        </Flex>
        <Flex flex={1} justify="center">
          <Text as="b" color="orange.300">
            50%
          </Text>
        </Flex>
        <Flex flex={1} justify="flex-end" pr={8}>
          <Text as="b" color="purple.300">
            60%
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
