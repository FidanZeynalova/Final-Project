import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'
import RememberMeContextProvider from './context/RememberMe.jsx'

createRoot(document.getElementById('root')).render(
  <RememberMeContextProvider>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </RememberMeContextProvider>
)
