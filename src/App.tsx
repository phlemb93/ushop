import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import ForgetPassword from './pages/ForgetPassword'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BurgerMenu from './components/BurgerMenu'
import Cart from './components/Cart'

function App() {

  return (
      <>
        <BurgerMenu />
        <Cart />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/login' element={<Login /> } />
          <Route path='/create-account' element={<CreateAccount /> } />
          <Route path='/forget-password' element={<ForgetPassword /> } />
        </Routes>
        <Footer />
      </>
  )
}

export default App
