import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KindeProvider
      clientId={`${import.meta.env.VITE_Kinde_ClientId}`}
      domain={`${import.meta.env.VITE_Kinde_Domain}`}
      logoutUri={window.location.origin}
      redirectUri={window.location.origin}
    >
      <App />
    </KindeProvider>
  </StrictMode>,
)
