import React, { useState } from 'react';
import './contactform.css';
import FormSignup from './contact';
import FormSuccess from './contactsuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}

        <div className='content-right'>
          <div className="contactcard">
            <h5>Details</h5>
            Full Address For Visa Form<br/>
            Hotel Shanker<br/>
            Street: Lazimpat<br/>
            Ward No: 2<br/>
            VDC/Municipality: Kathmandu<br/>
            District: Kathmandu<br/>
            Zone: Bagmati<br/>
            Postal Code: 44600<br/>
            Country: Nepal<br/>
            Phone: +977 1 4410151<br/>
            Fax: +977 1 4412691<br/>
            Official Site: www.shankerhotel.com.np<br/>
            Map: Hotel Shanker on Google Maps →
          </div>
        </div>
        
      </div>
      <div className="contactmap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.676862025145!2d85.28327371548191!3d27.696380532579774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1864599d537f%3A0x1fa226198e76edfd!2sDongol%20Printers!5e0!3m2!1sen!2snp!4v1620017372159!5m2!1sen!2snp" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </>
  );
};


export default Form;