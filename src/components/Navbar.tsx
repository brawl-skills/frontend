/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { Link } from 'react-router-dom'
import {
  GridItem,
  Flex,
  Heading,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { RiMenuLine, RiSearchLine } from 'react-icons/ri'

// Redux Store
import { useMySelector } from './storeHooks'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <GridItem position="fixed" w="100%">
      <Flex px={4} h="64px" bg="gray.900" align="center">
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={<Icon as={RiMenuLine} />}
            colorScheme="gray"
            variant={isOpen ? 'gradientSolid' : 'solid'}
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Heading
            size="lg"
            as="h2"
            bgGradient="linear(to-l, #FDA1FA, #9FF7FE, #D7FCCA)"
            bgClip="text"
            inlineSize="max-content"
          >
            Brawl Skills
          </Heading>

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
  const currentPage = useMySelector((state) => state.pages.page)

  return (
    <Stack direction="row" spacing={4} align="center">
      {NAV_ITEMS.map(({ label, pageType, href }) => (
        <Button
          key={label}
          variant={pageType === currentPage ? 'gradientSolid' : 'gradientGhost'}
          as={Link}
          to={href ?? '#'}
        >
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

function MobileNavItem({ label, href, pageType }: NavItem) {
  const currentPage = useMySelector((state) => state.pages.page)

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
          to={href ?? '#'}
          isFullWidth
          variant={pageType === currentPage ? 'gradientSolid' : 'gradientGhost'}
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

type PageTypes = 'main' | 'about' | 'lvl' | '404'

interface NavItem {
  label: string
  pageType: PageTypes
  href: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Главная страница',
    pageType: 'main',
    href: '/',
  },
  {
    label: 'Уровни',
    pageType: 'lvl',
    href: '/lvl',
  },
  {
    label: 'О Проекте',
    pageType: 'about',
    href: '/about',
  },
]
