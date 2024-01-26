import './App.css';
import Home from './components/home'
import About from './components/about'
import { Route, Routes, Navigate, NavLink} from 'react-router-dom'
import Products from './components/products'
import ProductDetails from './components/productDetails'
import SendMail from './components/sendmail';

function App() {
  return (
    <div className="App">
      <h3>React Router App</h3>
      <nav>
      <NavLink to="/home">Home</NavLink>&nbsp;
        <NavLink to="/about">About</NavLink>&nbsp;
        <NavLink to='/sendmail?name=mark&email=mark@abc.com' >SendMail</NavLink>&nbsp;
        <NavLink to='/products'>Products</NavLink>&nbsp;
        <NavLink to='/details/0'>Details</NavLink><br/>
        </nav>      
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sendmail" element={<SendMail />} />
        <Route path="/details/:index" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;