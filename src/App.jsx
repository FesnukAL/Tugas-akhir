import{ Routes, Route} from 'react-router-dom';
import produk from './pages/produk';
import Home from './pages/home';
import Review from './pages/Review';
import NavbarComponents from './components/NavbarComponents';
import FooterComponents from './components/FooterComponent';
import './css/main.css';


function App() {
  return <div>
    <NavbarComponents />
    <Routes>
     <Route path='/Produk' Component={produk}/>
     <Route path='/Home' Component={Home}/>
     <Route path='/contact' Component={Review}/>
    </Routes>
    <FooterComponents/>
  </div>
}

export default App