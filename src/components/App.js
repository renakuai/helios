import './app.scss';
import Side from './Side.js';
import { useState, useMemo } from 'react';
import { colorOptions } from './ColorOptions.js'

function App() {
  const [stops, setStops] = useState(9);
  const [baseColors, setBaseColors] = useState({
    'grey': 'hsl(0,0,',
    'purple': 'hsl(265,86,'
  })
  const [pickedColors, setPickedColors] = useState([]);
  const [tints, setTints] = useState({});
  const [hex, setHex] = useState(colorOptions)


  //calculate the list of lightness vals
  function calcLightness(color) {
    let val = '';
    if (color === 'grey') {
      val = Math.ceil((88 / (stops - 1)))
    }
    else {
      val = Math.ceil((78 / (stops - 1)))
    }
    let start = 96;
    const l = [96 + ')'];
    for (let i = 0; i < stops - 1; i++) {
      l.push((start -= val) + ')')
    }
    return (l)
  }

  //create all tints
  function calcAllTints(color) {
    const lightness = calcLightness(color);
    let colorVal = 0;
    let start = 0;
    let HSL = baseColors[color];

    lightness.forEach(val => {
      colorVal += 10;
      tints[color] = {
        ...tints[color],
        [colorVal]: HSL + val
      };
      start++;
    }
    )
  }

  //generate full color list based on selected palette
  function colorsList() {
    pickedColors.map((color) => (
      calcAllTints(color)
    ))
  }

  const options = {
    stops,
    tints,
    pickedColors,
    setPickedColors,
    hex
  }

  return (
    <div className="App">
      <header><h2>helios</h2></header>
      <Side {...options} />
    </div>
  );
}


export default App;

