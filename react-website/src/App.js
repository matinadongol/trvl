import React from 'react';
import Navbar from './components/Navbar';
import {Switch, Route, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home';
import Offers from './components/pages/Offers';
import Blogs from './components/pages/Blogs';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Error from './components/Error';
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
            <Route path='/blogs' exact component = {Blogs}/>
            <Route path='/contact' exact component = {Contact}/>
            <Route path='/sign-up' exact component = {SignUp}/>
            {/* <Route component = {Error} /> */}
            <Redirect to="/" />
          </Switch>
        </AnimatePresence>
      </Section>
    </>
  );
}

export default App;
