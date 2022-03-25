import React from 'react'
import ReactDOM from 'react-dom'
// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'

// Default styles
import './index.css'

// Chakra Theme
import theme from './theme'

// Screens
import Main from './screens/Main'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Main />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
