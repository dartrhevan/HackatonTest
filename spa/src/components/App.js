import React from 'react';
import '../css/App.css';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Path from './Path'

function App() {
  return (
    <div>
      <Header />
      <Path/>
      <Main />
      <Footer /> 
    </div>
  );
}

export default App;
