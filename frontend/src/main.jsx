import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CarparkProvider } from './Context/CarparkContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CarparkProvider>
        <App />
      </CarparkProvider>
    </AuthProvider>
  </BrowserRouter>

)
