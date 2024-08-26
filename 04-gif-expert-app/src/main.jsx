import React from 'react'
import ReactDOM from 'react-dom/client'
import GifExpertApp from './GifExpertApp'
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GifExpertApp/>
    </ThemeProvider>
  </React.StrictMode>,
)
