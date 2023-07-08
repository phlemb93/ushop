// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './utilities/contexts/userContext'
import { IsOpenProvider } from './utilities/contexts/isOpenContext';
import { Provider } from 'react-redux';
import { store } from './data/store';
import { ProductsContextProvider } from './utilities/contexts/productsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <UserContextProvider>
      <IsOpenProvider>
        <ProductsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductsContextProvider>
      </IsOpenProvider>
    </UserContextProvider>
  </Provider>
)