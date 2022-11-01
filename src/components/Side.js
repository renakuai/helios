import './side.scss';
import { useState, useRef } from 'react';
import Menu from './foundations/Menu/Menu.js';
import Checkbox from './foundations/Checkbox/Checkbox.js'
import { colorOptions } from './ColorOptions.js'
import PrimaryColor from './PrimaryColor.js';
import Stops from './Stops.js'
import Radius from './Radius.js'


function Palette(props) {

  const [openPrimary, setOpenPrimary] = useState(false);
  const [openLightness, setOpenLightness] = useState(false);
  const [openRadius, setOpenRadius] = useState(false);


  const {
    pickedColors,
    setPickedColors,
    hex,
    primary,
    setPrimary,
    stops,
    setStops,
    radius,
    setRadius
  } = props;

  function handleClick(e) {
    if (e.currentTarget.classList.value !== 'Primary') {
      console.log(openPrimary)
      setOpenPrimary(false)
    }
    if (e.currentTarget.classList.value !== 'Lightness') {
      setOpenLightness(false)
    }
    if (e.currentTarget.classList.value !== 'Radius') {
      setOpenRadius(false)
    }
  }

  return (
    <div className="Side">
      <section className="Options" >

        <div className="Palette" onClick={(e) => handleClick(e)}>
          <header><h5>Options</h5></header>
          <p>Color Palette:</p>
          <Menu>
            {colorOptions.map((col, i) => (
              <Checkbox
                key={i + col}
                hex={hex}
                pickedColors={pickedColors}
                setPickedColors={setPickedColors}
              >{col.name}</Checkbox>
            ))}
          </Menu>
        </div>

        <div className="Primary" onClick={(e) => handleClick(e)}>
          <PrimaryColor
            pickedColors={pickedColors}
            setPrimary={setPrimary}
            primary={primary}
            open={openPrimary}
            setOpen={setOpenPrimary}
          />
        </div>

        <div className="Lightness" onClick={(e) => handleClick(e)}>
          <Stops
            stops={stops}
            setStops={setStops}
            open={openLightness}
            setOpen={setOpenLightness}
          />
        </div>

        <div className="Radius" onClick={(e) => handleClick(e)}>
          <Radius
            radius={radius}
            setRadius={setRadius}
            open={openRadius}
            setOpen={setOpenRadius}
          />
        </div>

      </section >
    </div>
  );
}

export default Palette;