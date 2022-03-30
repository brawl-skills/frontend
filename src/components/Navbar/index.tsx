/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */

import {
  GridItem,
  Flex,
  Heading,
  Divider,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { RiMenuLine, RiSearchLine } from 'react-icons/ri'

// Imgs
import logoMini from '../../assets/imgs/logo-mini.svg'

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <GridItem>
      <Flex px={4} h="64px" bg="gray.900" align="center">
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={<Icon as={RiMenuLine} />}
            variant="gradientSolid"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            boxSize="52px"
            borderRadius="full"
            src={logoMini}
            alt="Brawl Skills"
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={4}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex
          flex={{ base: 1, md: 0 }}
          display={{ base: 'flex', md: 'none' }}
          justify="flex-end"
        >
          {' '}
        </Flex>
        <Flex
          flex={{ base: 0, md: 1 }}
          display={{ base: 'none', md: 'flex' }}
          justify="flex-end"
        >
          <SearchDB />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </GridItem>
  )
}

function DesktopNav() {
  return (
    <Stack direction="row" spacing={4} align="center">
      <Heading inlineSize="max-content" size="md">
        Brawl-Skills
      </Heading>
      <Divider
        borderColor="#4F5159"
        borderRadius="full"
        orientation="vertical"
        h={8}
        size="md"
      />
      {NAV_ITEMS.map(({ label }) => (
        <Button key={label} variant="gradientGhost">
          {label}
        </Button>
      ))}
    </Stack>
  )
}

function MobileNav() {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <SearchDB />
    </Stack>
  )
}

function MobileNavItem({ label, href }: NavItem) {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Button
          as={Link}
          href={href ?? '#'}
          isFullWidth
          variant="gradientGhost"
        >
          {label}
        </Button>
      </Flex>
    </Stack>
  )
}

function SearchDB() {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
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
  )
}

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Главная страница',
    href: '#',
  },
  {
    label: 'Уровни',
    href: '#',
  },
  {
    label: 'О Проекте',
    href: '#',
  },
]
