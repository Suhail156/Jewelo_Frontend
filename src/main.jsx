import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


createRoot(document.getElementById('root')).render(
      <BrowserRouter>
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>

     <Toaster position="top-right" reverseOrder={false} />
    <App />
    </LocalizationProvider>
  </StrictMode>
  </BrowserRouter>
 
)
