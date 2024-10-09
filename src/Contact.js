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
    const nameValue = name.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const messageValue = message.value;
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
        <form onSubmit={handleSubmit}>
          <label for="fname">Name</label>
          <input type="text" id="name" name="name" placeholder="" />
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="" />
          <label for="phone">phone</label>
          <input type="text" id="phone" name="phone" placeholder="" /><br /><br />
          <label for="message">message</label><br />
          <input type="text" id="message" name="message" placeholder="" /><br /><br />
          <input type="submit" value="Submit" />
        </form> 
      </div>

    </div>
    )
  }

export default Contact;