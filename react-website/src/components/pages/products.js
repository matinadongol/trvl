import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../../components/SliderData';
import Footer from '../Footer';

export default function Products() {
    return (
        <>
        <ImageSlider slides={SliderData}/>
        <Footer />
        </>
    );
}