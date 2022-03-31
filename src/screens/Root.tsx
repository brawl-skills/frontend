import { Routes, Route } from 'react-router-dom'
import { Grid } from '@chakra-ui/react'

// Components
import Navbar from '../components/Navbar'

// Screens
import Main from './Main'
import NotFound from './NotFound'
import About from './About'

export default function Root() {
  const paths = (path: string): string => {
    if (process.env.NODE_ENV === 'production') {
      return `/frontend${path}`
    }
    return path
  }

  return (
    <Grid h="100%" templateRows="max-content 1fr" templateColumns="1fr">
      <Navbar />
      <Routes>
        <Route path={paths('/')} element={<Main />} />
        <Route path={paths('/about')} element={<About />} />
        <Route path={paths('*')} element={<NotFound />} />
      </Routes>
    </Grid>
  )
}
