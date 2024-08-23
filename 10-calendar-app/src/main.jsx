import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CalendarApp from './CalendarApp'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <CalendarApp />
    </StrictMode>,
  </Provider>
)
