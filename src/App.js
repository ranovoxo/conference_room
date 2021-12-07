import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about_us/about';
import Home from './pages/home';
import SignUp from './pages/signup/signup';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <main>
    <Router>
      <Navbar />
      <Footer />
      <Routes>
        <Route exact path='/' element= {<Home/>} />
        <Route path='/about' element = { <About/>} />
        <Route path='/sign-up' element = { <SignUp/>} />
      </Routes>
    </Router>
   </main>
  );
}
export default App;
