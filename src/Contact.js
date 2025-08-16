import './css/Contact.css';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const apiKey = process.env.REACT_APP_API_URL;
const mapSource = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Berkhamsted,Berkhamsted+UK`

function Contact() {

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [message, setMessage] = useState(null)
  const [loadingMap, setLoadingMap] = useState(true)

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
    .error((error) => {
        console.log(error.text);
    });                                                                                                                                                                                                                                                           

  }

  return (
    <div>
      <div>
        {loadingMap && <div>
          <span className="loader"></span>
        </div>}
        <iframe
          title="map"
          className='map'
          frameborder="0"
          referrerpolicy="no-referrer-when-downgrade"
          src={mapSource}
          allowfullscreen
          onLoad={() => {setLoadingMap(false)}}>
        </iframe>
      </div>

      <div className='contact'>
        <h1 className='left contact-intro'>SAY HELLO</h1>
        <form onSubmit={handleSubmit}>
          <div className='inline'>
            <label htmlFor="fname">Name</label><br />
            <input type="text" id="name" name="name" value={name} onChange={handleInputChange} />
          </div>
          <div className='inline'>
            <label htmlFor="email">Email</label><br />
            <input type="text" id="email" name="email" value={email} onChange={handleInputChange} placeholder="" />
          </div>
          <div className='inline'>
            <label htmlFor="phone">Phone</label><br />
            <input type="text" id="phone" name="phone" value={phone} onChange={handleInputChange} placeholder="" />
          </div>
          <br />
          <div className='message-holder'>
            <div className='message'>
              <label htmlFor="message">Message</label><br />
              <textarea name="message" id="message" value={message} onChange={handleInputChange} cols="120" rows="5"></textarea>
            </div>
          </div>
          <br />
          <input className="submit" type="submit" value="Submit" />
        </form> 
      </div>

    </div>
    )
  }

export default Contact;