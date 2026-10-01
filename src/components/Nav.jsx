import { useState } from 'react';
import Picture from './Picture';
import logoWebp from '../imgs/logo.webp';
import logoJpg from '../imgs/logo.jpg';

const LINKEDIN = 'https://www.linkedin.com/in/haydnupstone/';

export default function Nav({ sections, active }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#home" onClick={close} aria-label="Angelpunzel, back to top">
          <Picture webp={logoWebp} fallback={logoJpg} alt="Angelpunzel" />
        </a>

        <nav className={`nav-pills ${open ? 'is-open' : ''}`} aria-label="Primary">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={close}
              className={active === s.id ? 'selected' : undefined}
              aria-current={active === s.id ? 'true' : undefined}
            >
              {s.label}
            </a>
          ))}
          <a href={LINKEDIN} target="_blank" rel="noreferrer" onClick={close}>LINKEDIN</a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`nav-toggle__bars ${open ? 'is-open' : ''}`} />
        </button>
      </div>
    </header>
  );
}
