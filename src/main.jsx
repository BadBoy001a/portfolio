
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="dev-qtflaa2qwcgmtqbx.us.auth0.com"
    clientId="q7JUZDgUfjMMPhUJmMGkL4fqHSG73o27"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
)
