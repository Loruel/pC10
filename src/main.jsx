import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'primeicons/primeicons.css';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import './index.css'
import ContextProvider from './context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>

  </StrictMode>,
)