import Reveal from '../components/Reveal';
import Picture from '../components/Picture';

import img1 from '../imgs/nxera.webp';
import img1Jpg from '../imgs/nxera.jpg';
import img2 from '../imgs/seqirus.webp';
import img2Jpg from '../imgs/seqirus.jpg';
import img3 from '../imgs/gsk.webp';
import img3Jpg from '../imgs/gsk.jpg';
import img4 from '../imgs/gsk2.webp';
import img4Jpg from '../imgs/gsk2.jpg';

const CASES = [
  {
    img: img1,
    fallback: img1Jpg,
    alt: 'Nxera pharma',
    title: (
      <>Working with&nbsp;<a href="https://www.nxera.life/" target="_blank" rel="noreferrer">Nxera Pharma</a></>
    ),
    market: 'Japanese listed technology-powered biopharmaceutical company',
    body: (
      <p>
        Project managing the introduction of a new senior employee long term incentive plan.
        Project managing UK company reorganisation
      </p>
    ),
  },
  {
    img: img2,
    fallback: img2Jpg,
    alt: 'Seqirus',
    title: (
      <>Working with&nbsp;<a href="https://www.csl.com/we-are-csl/our-businesses-and-products/csl-seqirus" target="_blank" rel="noreferrer">CSL Seqirus</a></>
    ),
    market: 'Australian listed biotechnology company (ASX 20)',
    body: (
      <p>
        Globally controlling the finance transfer of purchased Novartis and GSK flu businesses to
        ensure a smooth exit from Finance Transitional Service Agreements (TSA). Country by country
        flu business integration and comprehensive unwinding of acquired assets
      </p>
    ),
  },
  {
    img: img3,
    fallback: img3Jpg,
    alt: 'GSK',
    title: (
      <>Working with&nbsp;<a href="https://www.gsk.com/en-gb/" target="_blank" rel="noreferrer">GSK</a></>
    ),
    market: 'United Kingdom listed plc (FTSE 100)',
    body: (
      <>
        <p>Leading the finance process changes to ensure the smooth post M&A integration of Novartis vaccines.</p>
        <p>Ensuring that the integration was on time and successful.</p>
      </>
    ),
  },
  {
    img: img4,
    fallback: img4Jpg,
    alt: 'GSK Continued',
    contain: true,
    title: (
      <>Working with&nbsp;<a href="https://www.gsk.com/en-gb/" target="_blank" rel="noreferrer">GSK</a></>
    ),
    market: 'United Kingdom listed plc (FTSE 100)',
    body: (
      <>
        <p>
          Successfully led the IT project to the change process and CIMS (.NET) into SAP system
          change project to facilitate rebate payments direct to Clinical Commissioning Groups (CCG).
        </p>
        <p>
          Project managed transformational change to streamline and standardise the Homecare Rebate
          process, which reduced processing delays by over 75% and eliminated errors.
        </p>
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="group-head">
        <h2 className="section-title">About Us</h2>
      </div>

      <div className="cases">
        {CASES.map((c, i) => (
          <Reveal className="case slide-in-down" key={i}>
            <div className={`case__media${c.contain ? ' case__media--contain' : ''}`}>
              <Picture webp={c.img} fallback={c.fallback} alt={c.alt} />
            </div>
            <div className="case__text">
              <h2 className="section-title">{c.title}</h2>
              <h2 className="subtitle">{c.market}</h2>
              {c.body}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
