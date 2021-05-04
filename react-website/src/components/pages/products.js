import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../../components/SliderData';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../animations/index';

export default function Products() {
    return (
        <motion.div initial='out' animate = 'in' exit = 'out' variants = {animationTwo}>
        <ImageSlider slides={SliderData}/>
        <Footer />
        </motion.div>
    );
}