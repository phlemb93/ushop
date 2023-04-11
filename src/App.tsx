import Home from './pages/Home'
import Login from './pages/Login'
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
        <Login />
        {/* <Home /> */}
        <Footer />
      </>
  )
}

export default App
