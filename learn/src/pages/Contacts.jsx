import React from 'react'

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contact-number'>
      <h1>Contact Us</h1>

      <p>📞 Phone: +1 (234) 567 89 00</p>
      <p>📧 Email: info@easylearn.com</p>
      </div>
       
       <div className="contact-form">
      <form >
        <input type="text" placeholder="Your Name" /><br /><br />
        <input type="email" placeholder="Your Email" /><br /><br />
        <textarea placeholder="Your Message"></textarea><br /><br />
        <button>Send Message</button>
      </form>
      </div>
    </div>
  );
}

export default Contacts;
