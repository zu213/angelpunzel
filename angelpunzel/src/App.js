import './css/App.css';
import { Route, Routes, Link} from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

function App() {
  return (
    <div className="App">
      <body>
        <div className='top-picture'>
          a
        </div>
        <div className='navbar'>
          <Link to='/'>HOME</Link>
          <Link to='/about-me'>ABOUT ME</Link>
          <Link to='/contact-me'>CONTACT ME</Link>

        </div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          
          <Route path='/about-me' element={<About/>} />

          <Route path='/contact-me' element={<Contact/>} />
        </Routes>
      </body>
    </div>
  );
}

export default App;
