import { useState } from 'react';
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StartRating from './components/star-rating';

function App() {
  return (
    <div>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      <StartRating />
    </div>
  );
}

export default App;
