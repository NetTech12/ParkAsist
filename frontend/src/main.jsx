import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CarparkProvider } from './Context/CarparkContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleMapsProvider } from './Context/GoogleMapsContext.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <GoogleMapsProvider>
      <CarparkProvider>
        <App />
      </CarparkProvider>

    </GoogleMapsProvider>

  </BrowserRouter>

)
