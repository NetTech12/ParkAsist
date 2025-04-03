import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CarparkProvider } from './Context/CarparkContext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <CarparkProvider>
        <App />
      </CarparkProvider>

  </BrowserRouter>

)
