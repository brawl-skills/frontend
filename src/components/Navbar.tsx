/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { Link } from 'react-router-dom'
import { MouseEventHandler, useState } from 'react'
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
  useDisclosure,
} from '@chakra-ui/react'
import { RiMenuLine, RiSearchLine } from 'react-icons/ri'

// Redux Store
import { useMySelector } from './storeHooks'

// Helper functions
import paths from '../helper/paths'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <GridItem position="fixed" w="100%" zIndex="dropdown">
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
          <SearchDB onToggleMobileNav={onToggle} />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggleMobileNav={onToggle} />
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

function MobileNav({ onToggleMobileNav }: MobileNavProps) {
  return (
    <Stack bg="gray.800" p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          action={onToggleMobileNav}
          {...navItem}
        />
      ))}
      <SearchDB onToggleMobileNav={onToggleMobileNav} />
    </Stack>
  )
}

function MobileNavItem({ label, href, pageType, action }: NavItem) {
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
          onClick={action}
          isFullWidth
          variant={pageType === currentPage ? 'gradientSolid' : 'gradientGhost'}
        >
          {label}
        </Button>
      </Flex>
    </Stack>
  )
}

function SearchDB({ onToggleMobileNav }: SearchDBProps) {
  const [input, setInput] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // @ts-ignore
    onToggleMobileNav(e)
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value) setIsDisabled(false)
    else setIsDisabled(true)
    setInput(e.target.value)
  }

  return (
    <form onSubmit={handleSearch}>
      <Stack direction="row" align="center">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={RiSearchLine} />
          </InputLeftElement>
          <Input
            bg="gray.700"
            placeholder="Поиск игрока"
            border="0"
            value={input}
          />
        </InputGroup>
        <Button type="submit" variant="gradientSolid" isDisabled={isDisabled}>
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
  action?: MouseEventHandler
}

interface MobileNavProps {
  onToggleMobileNav: MouseEventHandler
}

interface SearchDBProps {
  onToggleMobileNav: MouseEventHandler
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Главная страница',
    pageType: 'main',
    href: paths('/'),
  },
  {
    label: 'Уровни',
    pageType: 'lvl',
    href: paths('/lvl'),
  },
  {
    label: 'О Проекте',
    pageType: 'about',
    href: paths('/about'),
  },
]
