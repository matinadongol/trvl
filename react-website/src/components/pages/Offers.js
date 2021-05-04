import React from 'react';
import '../../App.css';
import Accordion from '../Offers/Accordion';
import Heros from '../Offers/offerhero';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { animationThree } from '../animations/index';


function Home () {
    return (
        <motion.div  initial='out' animate = 'end' exit = 'out' variants = {animationThree}>
            <Heros />
            <Accordion />
            <Footer />
        </motion.div>
    );
}

export default Home;