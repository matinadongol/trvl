import React from 'react';
import { Link } from  'react-router-dom';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">
                <p>We have received your request.</p>
                <button>
                    <Link to="/" className="btnname">
                        Go to Home 
                    </Link>
                    
                </button>
            </div>
            
        </div>
    )
}

export default FormSuccess
