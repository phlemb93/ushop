import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import ForgetPassword from './pages/ForgetPassword'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BurgerMenu from './components/BurgerMenu'
import Cart from './components/Cart'
import Store from './pages/Store';
import { IsOpenProvider } from './utilities/contexts/useIsOpenContext';
import Filter from './components/Filter';
import Overlay from './components/Overlay';
import Product from './pages/ProductDetails';

function App() {

  return (
      <div className='app'>
        <IsOpenProvider>
          <Overlay />
          <Filter />
          <BurgerMenu />
          <Cart />
          <NavBar />
          <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/store' element={<Store /> } />
            <Route path='/login' element={<Login /> } />
            <Route path='/create-account' element={<CreateAccount /> } />
            <Route path='/forget-password' element={<ForgetPassword /> } />
            <Route path='/:id' element={ <Product /> } />
          </Routes>
          <Footer />
        </IsOpenProvider>
      </div>
  )
}

export default App