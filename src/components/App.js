import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

/* Components */
import Header from './Header';
import Footer from './Footer';
import HomeGuest from './HomeGuest';
import About from './About';
import Terms from './Terms';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeGuest />} exact />
        <Route path="/about-us" element={<About />} exact />
        <Route path="/terms" element={<Terms />} exact />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
