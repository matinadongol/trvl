import React from 'react';
import '../../App.css';
import Form from '../Form';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { animationThree, transition } from '../animations/index';

export default function SignUp() {
    return (
        <motion.div  initial='out' animate = 'end' exit = 'out' variants = {animationThree}>
        <Form />
        <Footer />
        </motion.div>
    );
}