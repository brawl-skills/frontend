import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
// Routing by React-Router
import { BrowserRouter } from 'react-router-dom'
// Chakra UI
import { Center, ChakraProvider } from '@chakra-ui/react'
// Redux
import { Provider } from 'react-redux'

// Store from Redux
import store from './components/store'

// Default styles
import './index.css'

// Chakra Theme
import theme from './theme'

// Path to screens
const Root = React.lazy(() => import('./screens/Root'))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <Suspense fallback={<Center h="100%">Загрузка...</Center>}>
            <Root />
          </Suspense>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
