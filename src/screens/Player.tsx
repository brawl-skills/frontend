/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Stack, Heading, Image, Button, useToast } from '@chakra-ui/react'

// Redux Store
import { useMyDispatch } from '../components/storeHooks'
import { setPage } from '../components/slices/pages'

// Components
import PageBody from '../components/PageBody'
import GradientLine from '../components/GradientLine'

// Helper functions
import random from '../helper/random'

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

interface ShortInfoProps {
  iconId: number
  name: string | undefined
  tag: string
}
