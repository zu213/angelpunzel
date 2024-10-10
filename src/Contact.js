import './css/Contact.css';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import emailjs from 'emailjs-com';

const apiKey = process.env.REACT_APP_API_URL;
const center = { lat: 51.763733745, lng: -0.574621325 };


function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";

    emailjs.sendForm('service_couf6bs', 'template_z6yyec8', e.target, 'hr0si7yaJ8e8_bh11')
    .then((result) => {
      // nothing
    }, (error) => {
        console.log(error.text);
    });                                                                                                                                                                                                                                                           

  }

  return (
    <div>
      
      <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
        <div className='map'>
          <Map
                defaultZoom={13}
                defaultCenter={ center }
          />
        </div>
      </APIProvider>

      <div className='contact'>
        <h1 className='left'>SAY HELLO</h1>
        <form onSubmit={handleSubmit}>
          <div className='inline'>
            <label htmlFor="fname">Name:</label><br />
            <input type="text" id="name" name="name" placeholder="" />
          </div>
          <div className='inline'>
            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="email" placeholder="" />
          </div>
          <div className='inline'>
            <label htmlFor="phone">Phone:</label><br />
            <input type="text" id="phone" name="phone" placeholder="" />
          </div>
          <br /><br />
          <div className='message-holder'>
          <div className='message'>
          <label htmlFor="message">Message:</label><br />
          <textarea name="message" id="message" cols="120" rows="5"></textarea>
          </div>
          </div>
          <br /><br />
          <input className="submit" type="submit" value="Submit" />
        </form> 
      </div>

    </div>
    )
  }

export default Contact;