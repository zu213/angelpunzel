import './css/Home.css';

import img1 from './imgs/home1.webp';
import img2 from './imgs/home2.webp';
import img3 from './imgs/home3.webp';



function Home() {

    return (
      <div>

      <div className='generic-div'>
          <div className='inline-left-big'>
            <h1>WHO WE ARE</h1>
            Right now many organisations are faced with the challenge of<br />
            gaining competitive advantage in a rapidly changing<br />
            technology driven environment, while meeting the demands of<br />
            cost cutting.
            <br />
            <br />
            Angelpunzel can help your enterprise achieve strong results in<br />
            the current environment.
          </div>
          <div className='inline-right-small'>
            <img src={img1} alt='' id="Image"></img>
          </div>
      </div>

      <div className='generic-div'>
        <div className='inline-left-small'>
            <img src={img2} alt='' id="Image"></img>
          </div>
          <div className='inline-right-big'>
            <h1>EXPERTISE</h1>
            
            Specialising in project management of business integration,<br />
            and successful transformation in the pharma industry.
          </div>
      </div>

      <div className='generic-div'>
        <div className='inline-left-big'>
            <h1>TROUBLESHOOTING</h1>
            Experts in assessing problems and identifying their root cause.<br />
            Presenting and working with your team to implement effective<br />
            solutions.
        </div>
        <div className='inline-right-small'>
            <img src={img3} alt='' id="Image"></img>
        </div>
          
      </div>

      </div>
    )
  }

export default Home;