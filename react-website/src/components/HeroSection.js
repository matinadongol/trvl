import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {motion} from 'framer-motion';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <motion.h1
             initial = {{ opacity: 0 }} 
             animate = {{ opacity: 1 }}
             transition = {{ duration: 1 }}
            >
                ADVENTURE AWAITS
            </motion.h1>
            <motion.p
             initial = {{ opacity: 0 }} 
             animate = {{ opacity: 1 }}
             transition = {{ duration: 2 }}
            >
                What are you waiting for?

            </motion.p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Book Now</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> WATCH  <i className='far fa-play-circle'/></Button>
               
            </div>
        </div>
    )
}

export default HeroSection

