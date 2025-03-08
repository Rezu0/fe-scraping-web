import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { HelmetProvider } from 'react-helmet-async';
import Tailwind from 'primereact/passthrough/tailwind';

// IMPORT COMPONENT
import App from './App.jsx'

// IMPORT STYLING
import './style/index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { LoadingBarContainer } from 'react-top-loading-bar';

createRoot(
  document.getElementById('root')
).render(
  <StrictMode>
    <PrimeReactProvider value={{ pt: Tailwind }}>
      <HelmetProvider>
        <LoadingBarContainer>
          <App />
        </LoadingBarContainer>
      </HelmetProvider>
    </PrimeReactProvider>
  </StrictMode>,
)
