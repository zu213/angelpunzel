import './css/App.css';
import { Route, Routes, Link, useLocation } from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

import logo from './imgs/logo.webp'

function App() {
  const location = useLocation()

  return (
    <div className="App">
        <div className='top-picture'>
          <img src={logo} alt='' id="Image"></img>
        </div>
        <div className='navbar'>
          <Link className={location.pathname === '/' && 'selected'} to='/'>HOME</Link>
          <Link className={location.pathname === '/about-me' && 'selected'} to='/about-me'>ABOUT US</Link>
          <Link className={location.pathname === '/contact-me' && 'selected'} to='/contact-me'>CONTACT US</Link>
          <Link to="https://www.linkedin.com/in/haydnupstone/"  target="_blank" rel="noreferrer">LINKEDIN</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          
          <Route path='/about-me' element={<About/>} />

          <Route path='/contact-me' element={<Contact/>} />
        </Routes>

        <footer className='footer'>
          <hr />
          <div>© 2025 Angelpunzel. All rights reserved.</div>
        </footer>
        <div >
        </div>
    </div>
  );
}

export default App;
