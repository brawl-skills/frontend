import React from 'react'
import {
  Flex,
  Divider,
  GridItem,
  Image,
  Heading,
  Stack,
  Button,
  Input,
  InputGroup,
  Icon,
  InputLeftElement,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

// Imgs
import logoMini from '../assets/imgs/logo-mini.svg'

export default function Navbar() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <GridItem>
      <Flex
        px={2}
        h="64px"
        bg="gray.900"
        align="center"
        justify="space-between"
      >
        <Stack spacing={6} direction="row" align="center">
          <Image
            boxSize="52px"
            borderRadius="full"
            src={logoMini}
            alt="Brawl Skills"
          />
          <Heading size="md">Brawl-Skills</Heading>
          <Divider
            borderColor="#4F5159"
            borderRadius="full"
            orientation="vertical"
            h={8}
            size="md"
          />
          <Button variant="gradientGhost">Главная страница</Button>
          <Button variant="gradientGhost">Уровни</Button>
          <Button variant="gradientGhost">О Проекте</Button>
        </Stack>
        <form onSubmit={handleSearch}>
          <Stack direction="row" align="center">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={RiSearchLine} />
              </InputLeftElement>
              <Input bg="gray.700" placeholder="Поиск игрока" border="0" />
            </InputGroup>
            <Button type="submit" variant="gradientSolid">
              Поиск
            </Button>
          </Stack>
        </form>
      </Flex>
    </GridItem>
  )
}
