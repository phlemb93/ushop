import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { ItemsContainer } from './components/ItemsContainer'
import { ItemDetails } from './components/ItemDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
     <div className="App">

        <nav>
          <NavBar />
        </nav>
      
       <main>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/products' element={ <ItemsContainer /> } />
          <Route path='/products/:id' element={ <ItemDetails /> } />
         </Routes>
       </main>
      
       <footer>
         <Footer />
        </footer>

      </div>
    </Router>
  );
}

export default App;
