import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CounterApp from "./CounterApp";
import store from './app/store.js'
import { Provider } from 'react-redux'
import PokeApp from './PokeApp.jsx';
import TodoApp from './TodoApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <CounterApp /> */}
      {/* <PokeApp/> */}
      <TodoApp/>
    </Provider>
  </StrictMode>,
)
