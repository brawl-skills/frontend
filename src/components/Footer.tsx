/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */

import { ReactElement } from 'react'
import {
  Flex,
  GridItem,
  Heading,
  Text,
  IconButton,
  Link,
  Stack,
  StackProps,
} from '@chakra-ui/react'
import { RiGithubLine, RiTranslate2, RiMoonLine } from 'react-icons/ri'

export default function Footer() {
  return (
    <GridItem>
      <Flex direction="column" px={{ base: 8, md: 32 }} py={8}>
        <ButtonsGroup
          direction="row"
          justify="center"
          display={{ base: 'flex', md: 'none' }}
          mb={8}
        />
        <Flex>
          <Stack flex={{ base: 6 }}>
            <Heading
              as="h4"
              size="md"
              bgGradient="linear(to-r, #D7FCCA, #9FF7FE, #FDA1FA)"
              bgClip="text"
              _before={{ content: '"©"', color: 'white', mr: 1 }}
              inlineSize="max-content"
            >
              Brawl Skills
            </Heading>
            <Text fontSize="sm">
              Этот материал является неофициальным и не одобрен Supercell.
            </Text>
            <Text as="p">
              {' '}
              Для получения дополнительной информации см. политику в отношении
              фан-контента Supercell:{' '}
              <Link isExternal href="https://modxvm.com/" color="purple.500">
                {' '}
                www.supercell.com/fan-content-policy
              </Link>
            </Text>
          </Stack>
          <ButtonsGroup
            flex={{ base: 7 }}
            direction="row"
            justify="flex-end"
            align="center"
            display={{ base: 'none', md: 'flex' }}
          />
        </Flex>
      </Flex>
    </GridItem>
  )
}

function ButtonsGroup(props: StackProps) {
  return (
    <Stack {...props}>
      {actions.map(({ name, icon }) => (
        <IconButton key={name} icon={icon} aria-label={name} pos="static" />
      ))}
    </Stack>
  )
}

interface SpecialAction {
  name: string
  icon: ReactElement
  href?: string
  action?: Function
}

const actions: Array<SpecialAction> = [
  { name: 'translate', icon: <RiTranslate2 /> },
  { name: 'switch appereance', icon: <RiMoonLine /> },
  { name: 'github', icon: <RiGithubLine /> },
]
