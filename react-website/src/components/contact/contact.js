import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './contactform.css';

const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
      );
    

    return (
        <div className="content-left">
            <form className="contactform" onSubmit = {handleSubmit}>
                <h3>Contact Us!</h3>
                <div className="contactform-inputs">
                    <label htmlFor='name' className="form-label">Name</label>
                    <input id="name" type="text" name='name' className="form-input" placeholder="Enter your name" value={values.name} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="contactform-inputs">
                    <label htmlFor='email' className="form-label">Email</label>
                    <input id="email" type="email" name='email' className="form-input" placeholder="Enter your email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="contactform-inputs">
                    <label htmlFor='subject' className="form-label">Subject</label>
                    <input id="subject" type="text" name='subject' className="form-input" placeholder="Enter your subject" value={values.subject} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="contactform-inputs">
                    <label htmlFor='message' className="form-label">Message</label>
                    <input id="message" type="textfield" name='message' className="form-input" placeholder="Enter your message" value={values.confirmpassword} onChange={handleChange}/>
                    {errors.message && <p>{errors.message}</p>}
                </div>
                <button type='submit' className="contactform-input-btn">Send</button>
            </form>
        </div>
    )
}

export default FormSignup;
