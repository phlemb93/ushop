import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'


function App() {
  return (
    <div className="App">

      <nav>
        <NavBar />
      </nav>

      <main>
        <Home />
      </main>
      
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
