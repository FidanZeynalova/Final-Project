import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import LoginUserProvider from './context/LoginUser.jsx'
import FavoritesContextProvider from './context/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
  <LoginUserProvider>
    <FavoritesContextProvider>
      <ThemeContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeContextProvider>
    </FavoritesContextProvider>
  </LoginUserProvider>
)
