import Home from './pages/Home'
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
        <Home />
        <Footer />
      </>
  )
}

export default App
