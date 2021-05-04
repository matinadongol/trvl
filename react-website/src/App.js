import React from 'react';
import Navbar from './components/Navbar';
import {Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Offers from './components/pages/Offers';
import Products from './components/pages/products';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';


const Section = styled.section`
  overflow-x: hidden;
`;


function App() {
let location = useLocation();

  return (
    <>
      <Navbar />
      <Section>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path='/' exact component = {Home}/>
            <Route path='/offers' exact component = {Offers}/>
            <Route path='/products' exact component = {Products}/>
            <Route path='/contact' exact component = {Contact}/>
            <Route path='/sign-up' exact component = {SignUp}/>
          </Switch>
        </AnimatePresence>
      </Section>
    </>
  );
}

export default App;
