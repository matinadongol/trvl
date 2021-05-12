import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2>Oops! Page Not Found</h2>
            <NavLink to="/">Go Back</NavLink>
        </div>
    )
}

export default Error;
