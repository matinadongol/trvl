import React from 'react';
import './modal.css';


export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
            {showModal ? (
                <div>modal</div>  
            ) : null}
        </>
    )
}