import { ThemeProvider } from 'styled-components';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { GlobalStyle, theme } from './theme';
import About from './pages/About';
import Agenda from './pages/Agenda';
import BookNow from './common/BookNow';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Lounge from './pages/galleries/Lounge';
import smoothscroll from 'smoothscroll-polyfill';

const App = () => {
  smoothscroll.polyfill();

  return (
    <Router>
    <ThemeProvider theme={ theme } >
      <GlobalStyle />

      <Switch>
          <Route path="/lounge">
            <Lounge />
          </Route>
          
          <Route exact path="/">
            <BookNow />

            <Home />
            <Gallery />
            <About />
            <Agenda />
            <Contact />
            <Footer />
          </Route>
        </Switch>
    </ThemeProvider>
    </Router>
  );
}

export default App;
