import { Routes, Route } from 'react-router-dom'
import { Grid } from '@chakra-ui/react'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Screens
import Main from './Main'
import NotFound from './NotFound'
import About from './About'
import Levels from './Levels'
import Player from './Player'

export default function Root() {
  return (
    <Grid h="100%" templateRows="repeat(3, max-content)" templateColumns="1fr">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/lvl" element={<Levels />} />
        <Route path="/about" element={<About />} />
        <Route path="/player/:playerName" element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Grid>
  )
}
