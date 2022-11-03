import './app.scss';
import Side from './SidePanel/Side.js';
import { useState, useMemo, useEffect } from 'react';
import { colorOptions, globalColor, semanticColor } from './utils/Objects.js';
import Body from './foundations/BodyContainer/Body.js';
import { Outlet } from "react-router-dom";
import TopNav from './foundations/Nav/TopNav';
import { calcAllTints } from './utils/calcAllTints'
import { calcSemanticColorTokens } from './utils/calcColorTokens'


function App() {

  //track active tab
  const [activeTab, setActiveTab] = useState('Global')

  //user input: stops
  const [stops, setStops] = useState(9);

  //user input: radius
  const [radius, setRadius] = useState('medium');

  //user input: colors selected
  const [pickedColors, setPickedColors] = useState(['purple', 'plum', 'blue', 'cobalt', 'turquoise', 'teal', 'green', 'fern', 'yellow', 'corn', 'orange', 'brick', 'rust', 'magenta', 'pink']);

  //user input: primary color
  const [primary, setPrimary] = useState('blue');

  //list of hues
  const [tints, setTints] = useState();

  //generated: globalColorTokens
  const [globalColorTokens, setGlobalColorTokens] = useState(
    globalColor);


  //generated semantic color tokens
  const [semanticColorTokens, setSemanticColorTokens] = useState(semanticColor);


  //useEffect that triggers calculation of all tints
  useEffect(() => {
    setTints({
      'white': globalColor.white,
      'black': globalColor.black,
      "grey": globalColor.grey,
      "red": globalColor.red
    });
    pickedColors.map((color) => (
      calcAllTints(color[0].toLowerCase() + color.substring(1), stops, setTints)
    ));

  }, [pickedColors, setPickedColors, stops, setStops, primary])

  console.log(globalColor.red)


  //updating globalColorTokens
  useEffect(() => {
    if (tints) {
      setGlobalColorTokens({});
      Object.keys(tints).map(key => (
        (key === 'white' || key === 'black' || key === 'grey' || key === 'red' ? setGlobalColorTokens({
          "white": tints.white,
          "black": tints.black,
          "grey": tints.grey,
          "red": tints.red,
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
    const names = Object.keys(semanticColor).map(key => (
      key
    ))

    let main = ''

    if (globalColorTokens[primary] !== undefined) {
      let hues = globalColorTokens[primary];
      main = primary
      names.map((name) => (
        calcSemanticColorTokens(name, stops, setSemanticColorTokens, hues, main)
      ))
    }
    else {
      main = (Object.keys(globalColorTokens))[2]
      setPrimary(main);
      let hues = globalColorTokens[main];
      names.map((name) => (
        calcSemanticColorTokens(name, stops, setSemanticColorTokens, hues, main)
      ))
    }

  }, [globalColorTokens])


  const options = {
    stops,
    tints,
    pickedColors,
    setPickedColors,
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
};





export default App;

