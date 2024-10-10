import './css/App.css';
import { Route, Routes, Link} from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

import logo from './imgs/logo.jpg'

function App() {
  return (
    <div className="App">
        <div className='top-picture'>
          <img src={logo} alt='' id="Image"></img>
        </div>
        <div className='navbar'>
          <Link to='/'>HOME</Link>
          <Link to='/about-me'>ABOUT ME</Link>
          <Link to='/contact-me'>CONTACT ME</Link>
          <Link to="https://www.linkedin.com/in/haydnupstone/"  target="_blank" rel="noreferrer">LINKEDIN</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          
          <Route path='/about-me' element={<About/>} />

          <Route path='/contact-me' element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
