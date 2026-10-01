const LINKEDIN = 'https://www.linkedin.com/in/haydnupstone/';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a className="site-footer__title" href="#home" aria-label="Angelpunzel, back to top">
          Angelpunzel
        </a>

        <nav className="site-footer__nav" aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>

        <p className="site-footer__legal">© 2026 Angelpunzel. All rights reserved.</p>
      </div>
    </footer>
  );
}
