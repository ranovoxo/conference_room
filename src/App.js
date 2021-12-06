import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';


function App() {
  return (
    <main>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element= {<Home/>} />
        <Route path='/about' element = { <About/>} />
      </Routes>
    </Router>
   </main>
  );
}
export default App;
