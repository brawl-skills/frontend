import { Routes, Route } from 'react-router-dom'
import { Grid } from '@chakra-ui/react'

// Components
import Navbar from '../components/Navbar'

// Screens
import Main from './Main'
import NotFound from './NotFound'

export default function Root() {
  return (
    <Grid h="100%" templateRows="max-content 1fr" templateColumns="1fr">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Grid>
  )
}
