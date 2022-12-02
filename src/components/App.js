import './app.scss';
import Side from './SidePanel/Side.js';
import { useState, useMemo, useEffect } from 'react';
import { colorOptions, globalColor, semanticColor, tintsObj } from './utils/Objects.js';
import Body from './foundations/BodyContainer/Body.js';
import { Outlet } from "react-router-dom";
import TopNav from './foundations/Nav/TopNav';
import { calcGlobalColorTokens } from './utils/calcGlobalColorTokens'
import { calcSemanticColorTokens } from './utils/calcSemanticColorTokens'


function App() {

  //track active tab
  const [activeTab, setActiveTab] = useState('Global')

  //user input: stops
  const [stops, setStops] = useState(9);

  //user input: radius
  const [radius, setRadius] = useState('medium');

  //user input: colors selected
  const [pickedColors, setPickedColors] = useState(['grey', 'red', 'purple', 'plum', 'blue', 'cobalt', 'turquoise', 'teal', 'green', 'fern', 'yellow', 'corn', 'orange', 'brick', 'rust', 'magenta', 'pink']);

  //user input: primary color
  const [primary, setPrimary] = useState('blue');

  //list of hues
  const [tints, setTints] = useState(tintsObj);

  //generated: globalColorTokens
  const [globalColorTokens, setGlobalColorTokens] = useState(
    globalColor);

  //generated: semantic color tokens
  const [semanticColorTokens, setSemanticColorTokens] = useState(semanticColor);

  //update globalColorTokens
  useEffect(() => {
    setGlobalColorTokens({});

    pickedColors.map((color) => {
      (color === 'white' || color === 'black' || color === 'red' || color === 'grey') ? setGlobalColorTokens({
        "white": tintsObj.white,
        "black": tintsObj.black,
        "red": tintsObj.red,
        "grey": tintsObj.grey
      }) : calcGlobalColorTokens(color[0].toLowerCase() + color.substring(1), stops, setGlobalColorTokens)
    })

  }, [stops, pickedColors, setPickedColors, primary])


  //update semanticColorTokens
  useEffect(() => {

    //update HSL vals in semanticColor obj
    Object.keys(semanticColor).map(key => (
      (Object.keys(globalColorTokens).map(item => {
        if (semanticColor[key]["token"] === "$token-color-white") {
          semanticColor[key]["hsl"] = globalColorTokens["white"]
        }
        else if (semanticColor[key]["token"] === "$token-color-black") {
          semanticColor[key]["hsl"] = globalColorTokens["black"]
        }
        else {
          Object.keys(globalColorTokens[item]).map(val => {

            if (val === semanticColor[key]["token"]) {
              semanticColor[key]["hsl"] = globalColorTokens[item][val]
            }
          })
        }
      }))
    ))

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

