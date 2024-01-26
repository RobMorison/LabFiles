import { Route, Routes, Navigate, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home'
import About from './components/about'

function App() {
  return (
    <div className="App">
      <h3>React Router App</h3>
      <nav>
          <Link to="/home">Home</Link>&nbsp;
          <Link to="/about">About</Link><br/>
        </nav>      
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;