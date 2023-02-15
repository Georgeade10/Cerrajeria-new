import React from 'react';

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
