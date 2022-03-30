import { Grid } from '@chakra-ui/react'

// Components
import Navbar from '../components/Navbar'
import PageBody from '../components/PageBody'

export default function Main() {
  return (
    <Grid h="100%" templateRows="max-content 1fr" templateColumns="1fr">
      <Navbar />
      <PageBody />
    </Grid>
  )
}
