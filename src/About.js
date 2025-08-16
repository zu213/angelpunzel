import './css/About.css';
import { useRef, useEffect } from 'react'

import img1 from './imgs/about1.webp';
import img2 from './imgs/about2.webp';
import img3 from './imgs/about3.webp';
import img4 from './imgs/about4.webp';

function About() {

  const divToSlide = useRef([])
  const divToSlideParent = useRef([])

  const getCallback = (i) => {
    return (entries, _) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            divToSlide.current[i].classList.add('visible');
          }
        });
      };
  }

  useEffect(() => {
    console.log(divToSlide.current)
    if (divToSlide.current.length < 1 || divToSlideParent.current.length < 1) return; // Ensure refs are not null

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observers = []
    for(let i = 0; i < divToSlide.current.length; i++) {
      const callback = getCallback(i)
      const observer = new IntersectionObserver(callback, options);
      observer.observe(divToSlideParent.current[i]);
      observers.push(observer)

    }
    return () => {
        observers.map(e => e.disconnect());
      };
  }, []);

  return (
    <div className='about'>
      <div className='generic-div-white' ref={el => divToSlideParent.current[0] = el}>
        <div className='slide-in-down' ref={el => divToSlide.current[0] = el}>
            <div className='inline-left-small'>
              <img src={img1} alt='' id="Image"></img>

            </div>
            <div className='inline-right-big'>
              <h1>Working with&nbsp;
                <a href="https://www.nxera.life/" target="_blank" rel="noreferrer">
                  Nxera Pharma
                </a>
              </h1>
              <h2>Japanese listed biotechnology group</h2>
              Project managing the introduction of a new senior employee long term incentive plan.

              Project managing UK company reorganisation
            </div>
        </div>
      </div>

      <div className='generic-div-black' ref={el => divToSlideParent.current[1] = el}>
        <div className='slide-in-down' ref={el => divToSlide.current[1] = el}>
          <div className='inline-left-big'>
            <h1>Working with&nbsp;
            <a href="https://www.csl.com/we-are-csl/our-businesses-and-products/csl-seqirus" target="_blank" rel="noreferrer">
              Seqirus
            </a>
            &nbsp;(a CSL company)</h1>
            <h2>Australian listed biotechnology company (ASX 20)</h2>
            Globally controlling the finance transfer of purchased Novartis and GSK flu businesses to ensure a smooth exit from Finance Transitional Service Agreements (TSA).

            Country by country flu business integration and comprehensive unwinding of acquired assets
          </div>

          <div className='inline-right-small'>
            <img src={img2} alt='' id="Image"></img>
          </div>
        </div>
      </div>

      <div className='generic-div-white' ref={el => divToSlideParent.current[2] = el}>
        <div className='slide-in-down' ref={el => divToSlide.current[2] = el}>
          <span className='inline-left-small'>
            <img src={img3} alt='' id="Image"></img>
          </span>
          <span className='inline-right-big'>
            <h1>Working with&nbsp;
              <a href="https://www.gsk.com/en-gb/" target="_blank" rel="noreferrer">
                GlaxoSmithKline
              </a>
            </h1>
            <h2>United Kingdom listed plc (FTSE 100)</h2>
            Leading the finance process changes to ensure the smooth post M&A integration of Novartis vaccines.
            <br />
            <br />
            Ensuring that the integration was on time and successful.
            
          </span>
        </div>
      </div>

      <div className='generic-div-black' ref={el => divToSlideParent.current[3] = el}>
        <div className='slide-in-down' ref={el => divToSlide.current[3] = el}>
          <div className='inline-left-big'>
            <h1>Working with&nbsp;
            <a href="https://www.gsk.com/en-gb/" target="_blank" rel="noreferrer">
              GlaxoSmithKline
            </a>
            </h1>
            <h2>United Kingdom listed plc (FTSE 100)</h2>
            Successfully led the IT project to the change process and CIMS (.NET) into SAP system 
            change project to facilitate rebate payments direct to Clinical Commissioning Groups (CCG).
            <br />
            <br />
            Project managed transformational change to streamline and standardise the Homecare Rebate 
            process, which reduced processing delays by over 75% and eliminated errors.
            <br />
          </div>
          <div className='inline-right-small'>
            <img src={img4} alt='' id="Image"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;