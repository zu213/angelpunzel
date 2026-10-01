import { useState } from 'react';
import emailjs from 'emailjs-com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const update = (e) => {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
    setErrors((prev) => (prev[id] ? { ...prev, [id]: undefined } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!EMAIL_RE.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.message.trim()) next.message = 'Add a short message so we know how to help.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ state: 'idle', message: '' });
      return;
    }

    setStatus({ state: 'sending', message: '' });
    emailjs
      .send('service_couf6bs', 'template_jd7o6er', { ...form }, 'hr0si7yaJ8e8_bh11')
      .then(() => {
        setForm(EMPTY);
        setStatus({ state: 'success', message: 'Thanks — your message is on its way. We will be in touch shortly.' });
      })
      .catch(() => {
        setStatus({ state: 'error', message: 'Something went wrong sending your message. Please try again or email us directly.' });
      });
  };

  return (
    <section id="contact" className="section container">
      <div className="contact-panel">
        <h2 className="section-title">CONTACT US</h2>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={form.name} onChange={update} aria-invalid={!!errors.name} />
            {errors.name && <span className="field__error">{errors.name}</span>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={update} aria-invalid={!!errors.email} />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone <span className="field__opt">(optional)</span></label>
              <input id="phone" type="tel" value={form.phone} onChange={update} />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" value={form.message} onChange={update} aria-invalid={!!errors.message} />
            {errors.message && <span className="field__error">{errors.message}</span>}
          </div>

          <div className="contact-form__foot">
            <button type="submit" className="submit" disabled={status.state === 'sending'}>
              {status.state === 'sending' ? 'Sending…' : 'Submit'}
            </button>
            {status.message && (
              <p className={`form-status form-status--${status.state}`} role="status">
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
