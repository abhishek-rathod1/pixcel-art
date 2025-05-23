import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState('');
  const [cellColors, setCellColors] = useState([]);
  useEffect(()=>{
    const totalCells = height*width;
    setCellColors(Array(totalCells).fill('white')); // Store color for each cell
    
  },[width, height])
  

  function handleSelectColor(e) {
    setColor(e.target.value);
  }

  function handleChangeColor(index) {
    const newColors = [...cellColors];
    newColors[index] = color;
    setCellColors(newColors);
  }
  function handleGrid(){
    setHeight();
    setWidth();
  }

  return (
    <>
      <h1>Pixel Art</h1>
      <div className="input-container">
        <input type='number' placeholder='height' onChange={(e)=>setHeight(e.target.value)} ></input>
        <input type='number' placeholder='width' onChange={(e)=>setWidth(e.target.value)}></input>
        <br></br>
        {/* <button onClick={handleGrid}>Apply</button> */}
        <label htmlFor="color">Select Color </label>
        <input type="color" id="color" onChange={handleSelectColor} />
      </div>
      <div className="grid-container" style={{display: "grid",
  gridTemplateColumns: `repeat(${width}, 100px)`}}>
        {cellColors.map((bgColor, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleChangeColor(index)}
            style={{ backgroundColor: bgColor }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
