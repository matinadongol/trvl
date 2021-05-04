import React from 'react';
import '../../App.css';
import Accordion from '../Offers/Accordion';
import Heros from '../Offers/offerhero';
import Footer from '../Footer';


function Home () {
    return (
        <>
            <Heros />
            <Accordion />
            <Footer />
        </>
    );
}

export default Home;