import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ResumeProvider } from './context/ResumeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ResumeProvider>
  <BrowserRouter>
    <StrictMode>
        <App/>
    </StrictMode>
  </BrowserRouter>
  </ResumeProvider>
)
