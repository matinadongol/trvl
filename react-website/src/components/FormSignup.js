import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(
        submitForm,
        validate
      );
    

    return (
        <div className="form-content-right">
            <form className="form" onSubmit = {handleSubmit}>
                <h3>Get started with us today!</h3>
                <div className="form-inputs">
                    <label htmlFor='username' className="form-label">Username</label>
                    <input id="username" type="text" name='username' className="form-input" placeholder="Enter your username" value={values.username} onChange={handleChange}/>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor='email' className="form-label">Email</label>
                    <input id="email" type="email" name='email' className="form-input" placeholder="Enter your email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor='password' className="form-label">Password</label>
                    <input id="password" type="password" name='password' className="form-input" placeholder="Enter your password" value={values.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor='confirmpassword' className="form-label">Confirm Password</label>
                    <input id="confirmpassword" type="password" name='confirmpassword' className="form-input" placeholder="Retype your password" value={values.confirmpassword} onChange={handleChange}/>
                    {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
                </div>
                <button type='submit' className="form-input-btn">Sign Up</button>
                <span className="form-input-login">
                    Already have an account? <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup;
