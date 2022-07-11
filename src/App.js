import React, { useState } from 'react';
import './App.css';
import wizelineLogo from './images/logo.png';
import Boton from './componentes/Button';
import Contador from './componentes/Contador';


function App() {

  const [numClicks, setNumClicks] = useState(0);


  const increment = () => {
    setNumClicks(numClicks + 1);
  }
  const decrement = () => {
    if(numClicks > 0) {
    setNumClicks(numClicks - 1);
    }
  }
  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='wizeline-logo-container'>
        <img className='wizeline-logo'
              src={wizelineLogo}
              alt='Wizeline-logo'/>
      </div>
      <div className='main-container'>
        <Contador numClicks={numClicks} />
        <Boton
          text='+'
          handlerClick={increment} />
        <Boton
          text='-'
          handlerClick={decrement} />
        <Boton
          text='Reset'
          handlerClick={resetCounter}
          primary
           />
      </div>
    </div>
  );
}

export default App;
