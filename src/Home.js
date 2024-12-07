import './css/Home.css';

import img1 from './imgs/home1.webp';
import img2 from './imgs/home2.webp';
import img3 from './imgs/home3.webp';
import autumnPath from './imgs/autumncropped.jpg'



function Home() {

  return (
    <div>

      <div className='banner'>
        <img alt="" src={autumnPath}></img>
        <div className='centered-banner'>Getting you through change</div>
      </div>

      <div className='generic-div'>
          <div className='sub-generic-div-left'>
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
          <div className='sub-generic-div-right'>
            <img className='portrait' src={img1} alt='' id="Image"></img>
          </div>
      </div>

      <div className='generic-div'>
        <div className='sub-generic-div-left'>
            <img src={img2} alt='' id="Image"></img>
          </div>
          <div className='sub-generic-div-right'>
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

      <div className='generic-div'>
        <div className='sub-generic-div-left'>
            <h1>TROUBLESHOOTING</h1>
            Experts in assessing problems and identifying their root cause.&lrm;
            Presenting and working with your team to implement effective
            solutions.&lrm;
        </div>
        <div className='sub-generic-div-right'>
            <img src={img3} alt='' id="Image"></img>
        </div>
          
      </div>

    </div>
  )
  }

export default Home;