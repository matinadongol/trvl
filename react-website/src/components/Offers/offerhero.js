import React from 'react';
import './offerhero.css';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import PlanetOne from './offerimg/planet.svg';
import PlanetTwo from './offerimg/planet-2.svg';
import PlanetThree from './offerimg/planet-3.svg';
import PlanetFour from './offerimg/planet-4.svg';

const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 10px;
        left: 10px;
    }

    ${Image}:nth-child(2) {
        top: 170px;
        right: 10px;
    }

    ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
    }
    
    ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
    }

`;



const Heros = () => {
    const fadeleft = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0}
    }

    return (
        <>
        <section>
            <div className="container">
                <div className="columnleft">
                    <motion.p
                    initial = {{ opacity: 0 }} 
                    animate = {{ opacity: 1 }}
                    transition = {{ duration: 2 }}
                    className="offerheading"
                    >
                        Offers and packages
                    </motion.p>
                    <motion.p 
                    variants = {fadeleft}
                    initial='hidden'
                    animate='visible'
                    transition={{ duration: 1 }}
                    className="offersub"
                    >
                        Here are the offers and packages.
                    </motion.p>
                    <motion.button 
                    whileHover = {{ scale: 1.05}}
                    whileTap = {{ scale: 0.95, backgroundColor: '#67F6E7', border: 'none', color:'#000' }}
                    initial = {{ opacity: 0 }} 
                    animate = {{ opacity: 1, transition: { duration: 2 } }}
                    className="offersbtn"
                    >
                        Go Back
                    </motion.button>
                </div>
                <ColumnRight>
                    <Image 
                    src={PlanetOne} 
                    alt="planet one"
                    whileTap = {{ scale: 0.9 }}
                    drag={true}
                    dragConstraints = {{ left: 0, right: 250, top: 0, bottom: 50}}
                    initial = {{ opacity: 0, y: -100 }}
                    animate= {{ opacity: 1, y: 0, transition: {duration: 1} }}
                    />
                    <Image 
                    src={PlanetTwo}
                    alt="planet two"
                    whileTap = {{ scale: 0.6 }}
                    drag={true}
                    dragConstraints = {{ left: 50, right: 250, top: 0, bottom: 50}}
                    initial = {{ opacity: 0, x: 100 }}
                    animate= {{ opacity: 1, x: 0, transition: {duration: 1} }}
                    />
                    <Image 
                    src={PlanetThree} 
                    alt="planet three"
                    whileTap = {{ scale: 0.8 }}
                    drag={true}
                    dragConstraints = {{ left: 0, right: 250, top: 0, bottom: 50}}
                    initial = {{ opacity: 0, x: -100 }}
                    animate= {{ opacity: 1, x: 0, transition: {duration: 1} }}
                    />
                    <Image 
                    src={PlanetFour} 
                    alt="planet four"
                    whileTap = {{ scale: 0.9 }}
                    drag={true}
                    dragConstraints = {{ left: 0, right: 0, top: 0, bottom: 0}}
                    initial = {{ opacity: 0, y: 100 }}
                    animate= {{ opacity: 1, y: 0, transition: {duration: 1} }}
                    />
                </ColumnRight>
            </div>
        </section>
        </>
    )
}

export default Heros;
