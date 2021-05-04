import React, {useState} from 'react';
import '../../App.css';
import Form from '../contact/contactform';
import First from '../contact/first';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../animations/index';


function Contact() {
    return (
        <motion.div  initial='out' animate = 'in' exit = 'out' variants = {animationTwo} >
            <First/>
            <Form/>
            <Footer/>
        </motion.div>
    );
}

export default Contact;