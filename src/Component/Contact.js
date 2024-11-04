import React, { useRef } from 'react';
import './contact.css';
import Phone from './Asset/phone.png';
import Email from './Asset/email.png';
import Address from './Asset/address.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  // const sendEmail = async (e) => {
  //   e.preventDefault();

  //   try {

  //     await emailjs.sendForm('service_wj2nn04', 'template_6qmav5l', form.current, 'lOXijGckc1NA5LFR6');
  //     console.log('SUCCESS!'); 
  //     alert('Message sent successfully!'); 
  //     form.current.reset(); 
  //   } catch (error) {
  //     console.error('FAILED...', error.text); 
  //     alert('Failed to send message. Please try again later.'); 
  //   }
  // };
  const sendEmail = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        'service_wj2nn04', // Replace with your Service ID
        'template_r3ld5rw', // Replace with your Template ID
        formRef.current, // Reference to the form
        'lOXijGckc1NA5LFR6' // Replace with your User ID
      );

      console.log('SUCCESS!'); // Log success
      alert('Message sent successfully!'); // Notify user of success
      formRef.current.reset(); // Reset the form
    } catch (error) {
      console.error('FAILED...', error); // Log the error
      alert('Failed to send message. Please try again later.'); // Notify user of failure
    }
  };

  return (
    <div className="c">
      <h1><strong>Contact Us</strong></h1>
      <div className="c-t">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" required />
          <input type="text" placeholder="Subject" name="user_subject" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <textarea rows="5" placeholder="Message" name="message" required></textarea>
          <button type="submit" className='btn5'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
