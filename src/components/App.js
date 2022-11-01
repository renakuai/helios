import './app.scss';
import Side from './Side.js';
import { useState, useMemo, useEffect } from 'react';
import { colorOptions } from './ColorOptions.js';
import Body from './Body.js';
import { Outlet } from "react-router-dom";
import TopNav from './foundations/Nav/TopNav'


function App() {
  const [activeTab, setActiveTab] = useState('Global')

  const [stops, setStops] = useState(9);

  //radius
  const [radius, setRadius] = useState('medium');

  const [baseColors, setBaseColors] = useState({
    'grey': 'hsl(0,0%,',
    'purple': 'hsl(265,86%,',
    'plum': 'hsl(281,52%,',
    'blue': 'hsl(212,77%,',
    'cobalt': 'hsl(227,86%,',
    'turquoise': 'hsl(187,80%,',
    'teal': 'hsl(187,33%,',
    'green': 'hsl(146,83%,',
    'fern': 'hsl(119,24%,',
    'yellow': 'hsl(55,100%,',
    'corn': 'hsl(43,82%,',
    'orange': 'hsl(39,100%,',
    'brick': 'hsl(11,55%,',
    'rust': 'hsl(25,74%,',
    'red': 'hsl(4,100%,',
    'magenta': 'hsl(292,83%,',
    'pink': 'hsl(324,95%,'
  })
  const [pickedColors, setPickedColors] = useState(['grey', 'purple', 'plum', 'blue', 'cobalt', 'turquoise', 'teal', 'green', 'fern', 'yellow', 'corn', 'orange', 'brick', 'rust', 'red', 'magenta', 'pink']);


  //import hex codes for color pills
  const [hex, setHex] = useState(colorOptions);

  //list of hues
  const [tints, setTints] = useState();
  //primary color
  const [primary, setPrimary] = useState('blue');

  const [globalColorTokens, setGlobalColorTokens] = useState({
    "white": "hsl(0,0%,100%)",
    "black": "hsl(0,0%,0%)",
    "grey": {
      "$token-color-grey-10": "hsl(0,0%,96%)", "$token-color-grey-20": "hsl(0,0%,85%)", "$token-color-grey-30": "hsl(0,0%,74%)", "$token-color-grey-40": "hsl(0,0%,63%)", "$token-color-grey-50": "hsl(0,0%,52%)", "$token-color-grey-60": "hsl(0,0%,41%)", "$token-color-grey-70": "hsl(0,0%,30%)", "$token-color-grey-80": "hsl(0,0%,19%)", "$token-color-grey-90": "hsl(0,0%,8%)"
    },
    "purple": {
      "$token-color-purple-10": "hsl(265,86%,96%)", "$token-color-purple-20": "hsl(265,86%,86%)", "$token-color-purple-30": "hsl(265,86%,76%)", "$token-color-purple-40": "hsl(265,86%,66%)", "$token-color-purple-50": "hsl(265,86%,56%)", "$token-color-purple-60": "hsl(265,86%,46%)", "$token-color-purple-70": "hsl(265,86%,36%)", "$token-color-purple-80": "hsl(265,86%,26%)", "$token-color-purple-90": "hsl(265,86%,16%)"
    },
    "plum": {
      "$token-color-plum-10": "hsl(281,52%,96%)", "$token-color-plum-20": "hsl(281,52%,86%)", "$token-color-plum-30": "hsl(281,52%,76%)", "$token-color-plum-40": "hsl(281,52%,66%)", "$token-color-plum-50": "hsl(281,52%,56%)", "$token-color-plum-60": "hsl(281,52%,46%)", "$token-color-plum-70": "hsl(281,52%,36%)", "$token-color-plum-80": "hsl(281,52%,26%)", "$token-color-plum-90": "hsl(281,52%,16%)"
    },
    "blue": {
      "$token-color-blue-10": "hsl(212,77%,96%)", "$token-color-blue-20": "hsl(212,77%,86%)", "$token-color-blue-30": "hsl(212,77%,76%)", "$token-color-blue-40": "hsl(212,77%,66%)", "$token-color-blue-50": "hsl(212,77%,56%)", "$token-color-blue-60": "hsl(212,77%,46%)", "$token-color-blue-70": "hsl(212,77%,36%)", "$token-color-blue-80": "hsl(212,77%,26%)", "$token-color-blue-90": "hsl(212,77%,16%)"
    },
    "cobalt": {
      "$token-color-cobalt-10": "hsl(227,86%,96%)", "$token-color-cobalt-20": "hsl(227,86%,86%)", "$token-color-cobalt-30": "hsl(227,86%,76%)", "$token-color-cobalt-40": "hsl(227,86%,66%)", "$token-color-cobalt-50": "hsl(227,86%,56%)", "$token-color-cobalt-60": "hsl(227,86%,46%)", "$token-color-cobalt-70": "hsl(227,86%,36%)", "$token-color-cobalt-80": "hsl(227,86%,26%)", "$token-color-cobalt-90": "hsl(227,86%,16%)"
    },
    "turquoise": {
      "$token-color-turquoise-10": "hsl(187,80%,96%)", "$token-color-turquoise-20": "hsl(187,80%,86%)", "$token-color-turquoise-30": "hsl(187,80%,76%)", "$token-color-turquoise-40": "hsl(187,80%,66%)", "$token-color-turquoise-50": "hsl(187,80%,56%)", "$token-color-turquoise-60": "hsl(187,80%,46%)", "$token-color-turquoise-70": "hsl(187,80%,36%)", "$token-color-turquoise-80": "hsl(187,80%,26%)", "$token-color-turquoise-90": "hsl(187,80%,16%)"
    },
    "teal": {
      "$token-color-teal-10": "hsl(187,33%,96%)", "$token-color-teal-20": "hsl(187,33%,86%)", "$token-color-teal-30": "hsl(187,33%,76%)", "$token-color-teal-40": "hsl(187,33%,66%)", "$token-color-teal-50": "hsl(187,33%,56%)", "$token-color-teal-60": "hsl(187,33%,46%)", "$token-color-teal-70": "hsl(187,33%,36%)", "$token-color-teal-80": "hsl(187,33%,26%)", "$token-color-teal-90": "hsl(187,33%,16%)"
    },
    "green": {
      "$token-color-green-10": "hsl(146,83%,96%)", "$token-color-green-20": "hsl(146,83%,86%)", "$token-color-green-30": "hsl(146,83%,76%)", "$token-color-green-40": "hsl(146,83%,66%)", "$token-color-green-50": "hsl(146,83%,56%)", "$token-color-green-60": "hsl(146,83%,46%)", "$token-color-green-70": "hsl(146,83%,36%)", "$token-color-green-80": "hsl(146,83%,26%)", "$token-color-green-90": "hsl(146,83%,16%)"
    },
    "fern": {
      "$token-color-fern-10": "hsl(119,24%,96%)", "$token-color-fern-20": "hsl(119,24%,86%)", "$token-color-fern-30": "hsl(119,24%,76%)", "$token-color-fern-40": "hsl(119,24%,66%)", "$token-color-fern-50": "hsl(119,24%,56%)", "$token-color-fern-60": "hsl(119,24%,46%)", "$token-color-fern-70": "hsl(119,24%,36%)", "$token-color-fern-80": "hsl(119,24%,26%)", "$token-color-fern-90": "hsl(119,24%,16%)"
    },
    "yellow": {
      "$token-color-yellow-10": "hsl(55,100%,96%)", "$token-color-yellow-20": "hsl(55,100%,86%)", "$token-color-yellow-30": "hsl(55,100%,76%)", "$token-color-yellow-40": "hsl(55,100%,66%)", "$token-color-yellow-50": "hsl(55,100%,56%)", "$token-color-yellow-60": "hsl(55,100%,46%)", "$token-color-yellow-70": "hsl(55,100%,36%)", "$token-color-yellow-80": "hsl(55,100%,26%)", "$token-color-yellow-90": "hsl(55,100%,16%)"
    },
    "corn": {
      "$token-color-corn-10": "hsl(43,82%,96%)", "$token-color-corn-20": "hsl(43,82%,86%)", "$token-color-corn-30": "hsl(43,82%,76%)", "$token-color-corn-40": "hsl(43,82%,66%)", "$token-color-corn-50": "hsl(43,82%,56%)", "$token-color-corn-60": "hsl(43,82%,46%)", "$token-color-corn-70": "hsl(43,82%,36%)", "$token-color-corn-80": "hsl(43,82%,26%)", "$token-color-corn-90": "hsl(43,82%,16%)"
    },
    "orange": {
      "$token-color-orange-10": "hsl(39,100%,96%)", "$token-color-orange-20": "hsl(39,100%,86%)", "$token-color-orange-30": "hsl(39,100%,76%)", "$token-color-orange-40": "hsl(39,100%,66%)", "$token-color-orange-50": "hsl(39,100%,56%)", "$token-color-orange-60": "hsl(39,100%,46%)", "$token-color-orange-70": "hsl(39,100%,36%)", "$token-color-orange-80": "hsl(39,100%,26%)", "$token-color-orange-90": "hsl(39,100%,16%)"
    },
    "brick": {
      "$token-color-brick-10": "hsl(11,55%,96%)", "$token-color-brick-20": "hsl(11,55%,86%)", "$token-color-brick-30": "hsl(11,55%,76%)", "$token-color-brick-40": "hsl(11,55%,66%)", "$token-color-brick-50": "hsl(11,55%,56%)", "$token-color-brick-60": "hsl(11,55%,46%)", "$token-color-brick-70": "hsl(11,55%,36%)", "$token-color-brick-80": "hsl(11,55%,26%)", "$token-color-brick-90": "hsl(11,55%,16%)"
    },
    "rust": {
      "$token-color-rust-10": "hsl(25,74%,96%)", "$token-color-rust-20": "hsl(25,74%,86%)", "$token-color-rust-30": "hsl(25,74%,76%)", "$token-color-rust-40": "hsl(25,74%,66%)", "$token-color-rust-50": "hsl(25,74%,56%)", "$token-color-rust-60": "hsl(25,74%,46%)", "$token-color-rust-70": "hsl(25,74%,36%)", "$token-color-rust-80": "hsl(25,74%,26%)", "$token-color-rust-90": "hsl(25,74%,16%)"
    },
    "red": {
      "$token-color-red-10": "hsl(4,100%,96%)", "$token-color-red-20": "hsl(4,100%,86%)", "$token-color-red-30": "hsl(4,100%,76%)", "$token-color-red-40": "hsl(4,100%,66%)", "$token-color-red-50": "hsl(4,100%,56%)", "$token-color-red-60": "hsl(4,100%,46%)", "$token-color-red-70": "hsl(4,100%,36%)", "$token-color-red-80": "hsl(4,100%,26%)", "$token-color-red-90": "hsl(4,100%,16%)"
    },
    "magenta": {
      "$token-color-magenta-10": "hsl(292,83%,96%)", "$token-color-magenta-20": "hsl(292,83%,86%)", "$token-color-magenta-30": "hsl(292,83%,76%)", "$token-color-magenta-40": "hsl(292,83%,66%)", "$token-color-magenta-50": "hsl(292,83%,56%)", "$token-color-magenta-60": "hsl(292,83%,46%)", "$token-color-magenta-70": "hsl(292,83%,36%)", "$token-color-magenta-80": "hsl(292,83%,26%)", "$token-color-magenta-90": "hsl(292,83%,16%)"
    },
    "pink": {
      "$token-color-pink-10": "hsl(324,95%,96%)", "$token-color-pink-20": "hsl(324,95%,86%)", "$token-color-pink-30": "hsl(324,95%,76%)", "$token-color-pink-40": "hsl(324,95%,66%)", "$token-color-pink-50": "hsl(324,95%,56%)", "$token-color-pink-60": "hsl(324,95%,46%)", "$token-color-pink-70": "hsl(324,95%,36%)", "$token-color-pink-80": "hsl(324,95%,26%)", "$token-color-pink-90": "hsl(324,95%,16%)"
    }
  });

  const [semanticColorTokens, setSemanticColorTokens] = useState({
    '$token-color-background-primary': {
      token: '$token-color-white',
      hsl: "hsl(0,0,100%)"
    }
  });

  //useEffect that triggers calculation of all tints
  useEffect(() => {
    setTints({
      'white': 'hsl(0,0%,100%)',
      'black': 'hsl(0,0%,0%)'
    });
    pickedColors.map((color) => (
      calcAllTints(color[0].toLowerCase() + color.substring(1))
    ));

  }, [pickedColors, setPickedColors, stops, setStops, primary])

  //updating globalColorTokens
  useEffect(() => {
    if (tints) {
      setGlobalColorTokens({});
      Object.keys(tints).map(key => (
        (key === 'white' || key === 'black' ? setGlobalColorTokens({
          "white": tints.white,
          "black": tints.black
        }) : Object.keys(tints[key]).map(hue => (
          setGlobalColorTokens(prevState => ({
            ...prevState,
            [key]: {
              ...prevState[key],
              ['$token-color-' + key + '-' + hue]: tints[key][hue]
            }
          })
          ))
        ))
      ))
    }
  }, [tints])

  //updating semanticColorTokens
  useEffect(() => {
    const names = [
      'background-action-primary-default',
      'background-action-primary-hover'
    ]

    let main = ''

    if (globalColorTokens[primary] !== undefined) {
      let hues = globalColorTokens[primary];
      main = primary
      names.map((name) => (
        findHues(name, hues, main)
      ))
    }
    else {
      const key = (Object.keys(globalColorTokens))[2]
      setPrimary(key);
      console.log(key)
      let hues = globalColorTokens[key];
      names.map((name) => (
        findHues(name, hues, key)
      ))
    }

  }, [globalColorTokens])


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
    const l = [96 + '%)'];
    for (let i = 0; i < stops - 1; i++) {
      l.push((start -= val) + '%)')
    }
    return (l)
  }

  //create all tints
  function calcAllTints(color) {
    const lightness = calcLightness(color);
    let colorVal = 0;
    let start = 0;
    let HSL = baseColors[color];
    const copy = [];

    lightness.forEach(val => {
      colorVal += 10;
      copy[color] = { ...copy[color] };
      copy[color][colorVal] = HSL + val;
      setTints(prevState => ({
        ...prevState,
        [color]: copy[color]
      }))
      start++;
    })
  }

  //set semantic tokens


  function findHues(name, hues, main) {
    let option = '';
    let count = '';
    if (name === 'background-action-primary-default') {
      if (stops <= 4) {
        count = (stops) * 10
      }
      else if (stops > 4 && stops < 8) {
        count = (stops - 1) * 10
      }
      else if (stops >= 8) {
        count = (stops - 2) * 10
      }
      option = hues[`$token-color-${main}-${count}`]
      setSemanticColorTokens(prevState => ({
        ...prevState,
        ['$token-color-' + name]: {
          "token": `$token-color-${main}-${count}`,
          "hsl": option
        }
      }))
    }
    else if (name === 'background-action-primary-hover') {

      if (stops <= 4) {
        count = (stops) * 10
      }
      else if (stops > 4 && stops < 8) {
        count = (stops - 1) * 10
      }
      else if (stops >= 8) {
        count = (stops - 2) * 10
      }
      option = hues[`$token-color-${main}-${count - 10}`]
      setSemanticColorTokens(prevState => ({
        ...prevState,
        ['$token-color-' + name]: {
          "token": `$token-color-${main}-${count - 10}`,
          "hsl": option
        }
      }))
    }
  }


  const options = {
    stops,
    tints,
    pickedColors,
    setPickedColors,
    hex,
    primary,
    setPrimary,
    setStops,
    globalColorTokens,
    setGlobalColorTokens,
    semanticColorTokens,
    setSemanticColorTokens,
    radius,
    setRadius
  }

  return (
    <div className="App">
      <header><h2>helios</h2></header>
      <Side {...options} />
      <Body>
        <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
        {globalColorTokens && <Outlet context={{
          globalColorTokens,
          setGlobalColorTokens,
          semanticColorTokens,
          setSemanticColorTokens,
          activeTab,
          setActiveTab,
          radius,
          setRadius
        }} />}
      </Body>
    </div>
  );
}




export default App;

