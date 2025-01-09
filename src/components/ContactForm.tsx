import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css';
import emailjs from 'emailjs-com'

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [feedback, setFeedback] = useState(''); // for success/failure feedback

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // send email via emailjs
    emailjs
      .send(
        'service_91d8tgt',
        'template_4pd9az9',
        {
          from_name: form.name,
          from_email: form.email,
          project_details: form.message,
        },
        'OiDsYQmR0HOKhnIVo'
      )
      .then(
        (result) => {
          setFeedback('Your message has been sent successfully!');
          setTimeout(() => setFeedback(''), 10000);
          setForm({ name: '', email: '', message: '' }); // reset form
        },
        (error) => {
          setFeedback('An error has occured while sending your message. Please try again later.');
          console.error(error.text);
        }
      );
  };

  return (
    <div>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        {/* left side text */}
        <div className={styles.contactText}>
          <p>Contact me here!</p>
          <img src="/assets/arrow.png" alt="Arrows icons created by ChilliColor - Flaticon" className={styles.arrow}/>
        </div>
  
        {/* right side form fields */}
        <div className={styles.formFields}>
          <input 
            className={styles.nameInput}
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.emailInput}
            name="email"
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className={styles.messageInput}
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </div>
      </form>
      {feedback && <p className={styles.feedback}>{feedback}</p>}
    </div>
  );
  
};

export default ContactForm;
