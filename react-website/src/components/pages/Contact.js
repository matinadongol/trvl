import React, {useState} from 'react';
import '../../App.css';
import Form from '../contact/contactform';
import First from '../contact/first';
import Footer from '../Footer';


export default function Comtact() {
    return (
        <>
        <First/>
        <Form/>
        <Footer/>
        </>
    );
}