import React from 'react'
import ReactDOM from 'react-dom'
// Routing by React-Router
import { BrowserRouter } from 'react-router-dom'
// Chakra UI
import { ChakraProvider } from '@chakra-ui/react'
// Redux
import { Provider } from 'react-redux'

// Store from Redux
import store from './components/store'

// Default styles
import './index.css'

// Chakra Theme
import theme from './theme'

// Path to screens
import Root from './screens/Root'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Root />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
