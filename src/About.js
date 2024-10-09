import './css/About.css';

import img1 from './imgs/about1.webp';
import img2 from './imgs/about2.webp';
import img3 from './imgs/about3.webp';
import img4 from './imgs/about4.webp';

function About() {

    return (
      <div>
        <div className='generic-div-white'>
          <div>
              <div className='inline-left-small'>
                <img src={img1} alt='' id="Image"></img>

              </div>
              <div className='inline-right-big'>
                <h1>Working with Sosei Group Corporation</h1>
                <h2>Japanese listed biotechnology group (Mothers index)</h2>
                Project managing the introduction of a new senior employee long term incentive plan.

                Project managing UK company reorganisation
              </div>
          </div>
          


        </div>

        <div className='generic-div-black'>
          <div>
            <div className='inline-left-small'>
              <img src={img2} alt='' id="Image"></img>

            </div>
            <div className='inline-right-big'>
              <h1>Working with Seqirus (a CSL company)</h1>
              <h2>Australian listed biotechnology company (ASX 20)</h2>
              Globally controlling the finance transfer of purchased Novartis and GSK flu businesses to ensure a smooth exit from Finance Transitional Service Agreements (TSA).

              Country by country flu business integration and comprehensive unwinding of acquired assets
            </div>
          </div>
        </div>

        <div className='generic-div-white'>

          <div>
            <span className='inline-left-small'>
              <img src={img3} alt='' id="Image"></img>
            </span>
            <span className='inline-right-big'>
              <h1>Working with Sosei Group Corporation</h1>
              <h2>Japanese listed biotechnology group (Mothers index)</h2>
              
              Project managing the introduction of a new senior employee long term incentive plan.
              <br />
              <br />
              Project managing UK company reorganisation
              
            </span>
          </div>

          <br /><br /><br /><br />

          <div>
            <div className='inline-left-small'>
              <img src={img4} alt='' id="Image"></img>
            </div>
            <div className='inline-right-big'>
              <h1>Working with GlaxoSmithKline</h1>
              <h2>United Kingdom listed plc (FTSE 100)</h2>
              Successfully led the IT project to the change process and CIMS (.NET) into SAP system 
              change project to facilitate rebate payments direct to Clinical Commissioning Groups (CCG).
              <br />
              <br />
              Project managed transformational change to streamline and standardise the Homecare Rebate 
              process, which reduced processing delays by over 75% and eliminated errors.
              <br />
            </div>
          </div>

        <br />
        </div>
      </div>
    )
  }

export default About;