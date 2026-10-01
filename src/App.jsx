import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import { useScrollSpy, useDeepLinkScroll } from './hooks';

const SECTIONS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT US' },
  { id: 'contact', label: 'CONTACT US' },
];

export default function App() {
  const active = useScrollSpy(SECTIONS.map((s) => s.id));
  useDeepLinkScroll();

  return (
    <div className="App">
      <Nav sections={SECTIONS} active={active} />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
