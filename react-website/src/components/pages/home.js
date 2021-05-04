import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { animationOne } from '../animations/index';


function Home () {
    return (
        <motion.div initial='out' animate = 'in' exit = 'out' variants = {animationOne}>
            <HeroSection />
            <Cards />
            <Footer />
        </motion.div>
    );
}

export default Home;