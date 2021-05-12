import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../animations/index';
import Search from '../Search/Search';

export default function Blogs() {
    return (
        <motion.div initial='out' animate = 'in' exit = 'out' variants = {animationTwo}>
        <Search/>
        <ImageSlider slides={SliderData}/>
        <Footer />
        </motion.div>
    );
}