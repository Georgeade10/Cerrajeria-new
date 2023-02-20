import React from 'react';
import ReactGA from 'react-ga';

import {
  AboutUs,
  FindUs,
  Gallery,
  Header,
  Laurels,
  SpecialMenu,
  Footer,
} from './container';
import { Navbar } from './components';
import './App.css';

ReactGA.initialize('G-LM4RP82FBV');

ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Laurels />
    <Gallery />
    <AboutUs />
    <FindUs />
    <Footer />
  </div>
);

export default App;
