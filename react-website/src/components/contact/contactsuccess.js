import React from 'react';
import { Link } from  'react-router-dom';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="contactform-success">
                <p>We have received your message.</p>
                <button>
                    <Link to="/" className="contactbtnname">
                        Go to Home 
                    </Link>
                    
                </button>
            </div>
            
        </div>
    )
}

export default FormSuccess
