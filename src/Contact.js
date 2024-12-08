import './css/Contact.css';
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const apiKey = process.env.REACT_APP_API_URL;
const center = { lat: 51.763733745, lng: -0.574621325 };


function Contact() {

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [message, setMessage] = useState(null)

  const handleInputChange = (e) => {
    const id = e.target.id;
    if(id === 'name'){
      setName(e.target.value);
    }else if(id === 'email'){
      setEmail(e.target.value);
    }else if(id === 'phone'){
      setPhone(e.target.value);
    }else if(id === 'message'){
      setMessage(e.target.value);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }

    setName("")
    setEmail("")
    setPhone("")
    setMessage("")

    emailjs.send('service_couf6bs', 'template_jd7o6er', params, 'hr0si7yaJ8e8_bh11')
    .then((_) => {
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
            <input type="text" id="name" name="name" value={name} onChange={handleInputChange} />
          </div>
          <div className='inline'>
            <label htmlFor="email">Email:</label><br />
            <input type="text" id="email" name="email" value={email} onChange={handleInputChange} placeholder="" />
          </div>
          <div className='inline'>
            <label htmlFor="phone">Phone:</label><br />
            <input type="text" id="phone" name="phone" value={phone} onChange={handleInputChange} placeholder="" />
          </div>
          <br /><br />
          <div className='message-holder'>
          <div className='message'>
          <label htmlFor="message">Message:</label><br />
          <textarea name="message" id="message" value={message} onChange={handleInputChange} cols="120" rows="5"></textarea>
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