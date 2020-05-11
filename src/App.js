import { ThemeProvider } from 'styled-components';
import React from 'react';

import { GlobalStyle, theme } from './theme';

import About from './pages/About';
import Agenda from './pages/Agenda';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import BookNow from './common/BookNow';
import smoothscroll from 'smoothscroll-polyfill';

const App = () => {
  smoothscroll.polyfill();

  return (
    <ThemeProvider theme={ theme } >
      <GlobalStyle />

      <BookNow />

      <Home />
      <Gallery />
      <About />
      <Agenda />
      <Contact />
      <Footer />
      </ThemeProvider>
  );
}

export default App;
