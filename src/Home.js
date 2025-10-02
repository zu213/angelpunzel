import './css/Home.css';

import { useRef, useEffect, useState } from 'react';

import img1 from './imgs/headshot.webp';
import img2 from './imgs/project-management.webp';
import img3 from './imgs/help.webp';
import autumnWebp from './imgs/automn-banner.webp'
import discussionWebp from './imgs/project-management.webp'



function Home() {
  const divToSlide = useRef([])
  const divToSlideParent = useRef([])
  const [bannerLoaded, setBannerLoaded] = useState(false)

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
    if (divToSlide.current.length < 1 || divToSlideParent.current.length < 1) return;

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
    <div className='home'>

      <div className='banner'>
        <img className='banner-image' onLoad={() => setBannerLoaded(true)} alt="Autumn Banner" src={autumnWebp}></img>
        {bannerLoaded && <div className='centered-banner'>
            Getting you through change
        </div>}
      </div>

      <div className='generic-div' ref={el => divToSlideParent.current[0] = el}>
        <div className='sub-generic-div-left slide-in-left' ref={el => divToSlide.current[0] = el}>
          <h1>WHO WE ARE</h1>
          <h2>Netsuite Implementation Expert | Pharmaceutical Specialist | Collaborative Decision Maker</h2>
          Right now many organisations are faced with the challenge of
          gaining competitive advantage in a rapidly changing
          technology driven environment, while meeting the demands of
          cost cutting.&lrm;
          <br />
          <br />
          Angelpunzel can help your enterprise achieve strong results in
          the current environment.&lrm;
        </div>
        <div className='sub-generic-div-right fixed-height'>
          <img className='portrait' src={img1} alt='Portrait of Haydn Upstone'></img>
        </div>
      </div>

      <div className='generic-div darker-div' ref={el => divToSlideParent.current[1] = el}>
        <div className='sub-generic-div-left'>
          <picture>
            <source srcSet={discussionWebp} type="image/webp" />
            <img src={img2} alt="Project Managment" />
          </picture>
        </div>
        <div className='sub-generic-div-right slide-in-right' ref={el => divToSlide.current[1] = el}>
          <h1>EXPERTISE</h1>
          
          Specialising in project management of business integration,
          and successful transformation in the pharma industry.
          <br />
          <br />
          Working with companies such as:
          <ul>
            <li><a href="https://www.nxera.life/"  target="_blank" rel="noreferrer">Nxera</a></li>
            <li><a href="https://www.csl.com/we-are-csl/our-businesses-and-products/csl-seqirus"  target="_blank" rel="noreferrer">CSL Seqirus</a></li>
            <li><a href="https://www.gsk.com/en-gb/" target="_blank" rel="noreferrer">GlaxoKlineSmith</a></li>
          </ul>
        </div>
      </div>

      <div className='generic-div' ref={el => divToSlideParent.current[2] = el}>
        <div className='sub-generic-div-left slide-in-left' ref={el => divToSlide.current[2] = el}>
            <h1>TROUBLESHOOTING</h1>
            Experts in assessing problems and identifying their root cause.&lrm;
            Presenting and working with your team to implement effective
            solutions.&lrm;
        </div>
        <div className='sub-generic-div-right'>
            <img src={img3} alt='Troubleshooting'></img>
        </div>
          
      </div>

    </div>
  )
  }

export default Home;