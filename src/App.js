import React, { useState } from 'react';
import './App.css';
import BoxGenerator from './components/BoxGenerator';


function App() {
  

  const [boxes, setBoxes] = useState([]);

  

  return (
    <div className="App">
      
      <BoxGenerator boxes={boxes} setBoxes = {setBoxes} />

      <div style={{ display: "flex" }}>
        {
          boxes.map((color, i) => {
            return (
            <div
              key={i}
              style={{
                backgroundColor: color,
                width: 200,
                height: 200,
                marginRight: 10,
              }}
              ></div>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
