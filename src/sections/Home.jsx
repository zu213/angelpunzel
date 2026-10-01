import { useState } from 'react';
import Reveal from '../components/Reveal';
import Picture from '../components/Picture';

import headshotWebp from '../imgs/headshot.webp';
import headshotJpg from '../imgs/headshot.jpg';
import expertiseWebp from '../imgs/project-management.webp';
import expertiseJpg from '../imgs/project-management.jpg';
import helpWebp from '../imgs/help.webp';
import helpJpg from '../imgs/help.jpg';
import bannerWebp from '../imgs/automn-banner.webp';
import bannerJpg from '../imgs/autumn-banner.jpg';

export default function Home() {
  const [bannerLoaded, setBannerLoaded] = useState(false);

  return (
    <section id="home">
      <div className="hero">
        <Picture className="hero__media" webp={bannerWebp} fallback={bannerJpg} alt="" onLoad={() => setBannerLoaded(true)} />
        <div className="hero__scrim" />
        <div className="hero__inner container">
          {bannerLoaded && <h1 className="hero__title">Getting you through change</h1>}
        </div>
      </div>

      <div className="section container">
        <div className="intro">
          <Reveal className="intro__text slide-in-down">
            <h2 className="section-title">WHO WE ARE</h2>
            <h2 className="subtitle">Complex Finance Transformation | ERP Implementation | Post-M&A Integration | Pharmaceutical Specialist | Netsuite Implementation</h2>
            <p>
              Right now many organisations are faced with the challenge of
              gaining competitive advantage in a rapidly changing
              technology and AI driven environment, while meeting the demands of
              cost cutting.
            </p>
            <p>
              Angelpunzel can help your enterprise achieve strong results in
              the current environment.
            </p>
          </Reveal>
          <Reveal className="intro__portrait slide-in-down">
            <Picture
              webp={headshotWebp}
              fallback={headshotJpg}
              alt="Haydn Upstone, pharmaceutical project management consultant and founder of Angelpunzel"
            />
          </Reveal>
        </div>

        <div className="cards">
          <Reveal className="card slide-in-down">
            <Picture className="card__media" webp={expertiseWebp} fallback={expertiseJpg} alt="Project Managment" />
            <div className="card__body">
              <h2 className="section-title">EXPERTISE</h2>
              <p>
                Specialising in project management of business integration,
                and successful transformation in the pharma industry.
              </p>
              <p>Working with companies such as:</p>
              <ul>
                <li><a href="https://www.nxera.life/" target="_blank" rel="noreferrer">Nxera Pharma</a></li>
                <li><a href="https://www.csl.com/we-are-csl/our-businesses-and-products/csl-seqirus" target="_blank" rel="noreferrer">CSL Seqirus</a></li>
                <li><a href="https://www.gsk.com/en-gb/" target="_blank" rel="noreferrer">GSK</a></li>
              </ul>
            </div>
          </Reveal>

          <Reveal className="card slide-in-down">
            <Picture className="card__media" webp={helpWebp} fallback={helpJpg} alt="Troubleshooting" />
            <div className="card__body">
              <h2 className="section-title">TROUBLESHOOTING</h2>
              <p>
                Experts in assessing problems and identifying their root cause.
                Presenting and working with your team to implement effective
                solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
