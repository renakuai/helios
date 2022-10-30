import './app.scss';
import Side from './Side.js';
import { useState, useMemo, useEffect } from 'react';
import { colorOptions } from './ColorOptions.js'

function App() {
  const [stops, setStops] = useState(9);
  const [baseColors, setBaseColors] = useState({
    'grey': 'hsl(0,0,',
    'purple': 'hsl(265,86,',
    'plum': 'hsl(281,52,',
    'blue': 'hsl(212,77,',
    'cobalt': 'hsl(227,86,',
    'turquoise': 'hsl(187,80,',
    'teal': 'hsl(187,33,',
    'green': 'hsl(146,83,',
    'fern': 'hsl(119,24,',
    'yellow': 'hsl(55,100,',
    'corn': 'hsl(43,82,',
    'orange': 'hsl(39,100,',
    'brick': 'hsl(11,55,',
    'rust': 'hsl(25,74,',
    'red': 'hsl(4,100,',
    'magenta': 'hsl(292,83,',
    'pink': 'hsl(324,95,'
  })
  const [pickedColors, setPickedColors] = useState(['Grey', 'Purple', 'Plum', 'Blue', 'Cobalt', 'Turquoise', 'Teal', 'Green', 'Fern', 'Yellow', 'Corn', 'Orange', 'Brick', 'Rust', 'Red', 'Magenta', 'Pink']);

  //import hex codes for color pills
  const [hex, setHex] = useState(colorOptions);

  //list of hues
  const [tints, setTints] = useState({});
  //primary color
  const [primary, setPrimary] = useState('Blue');

  //useEffect that triggers calculation of all tints
  useEffect(() => {
    console.log(pickedColors)
    pickedColors.map((color) => (
      calcAllTints(color[0].toLowerCase() + color.substring(1))
    ))
    console.log(tints)
  }, [pickedColors, setPickedColors, stops, setStops])


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
    setTints({});

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


  const options = {
    stops,
    tints,
    pickedColors,
    setPickedColors,
    hex,
    primary,
    setPrimary,
    stops,
    setStops
  }

  return (
    <div className="App">
      <header><h2>helios</h2></header>
      <Side {...options} />
    </div>
  );
}


export default App;

