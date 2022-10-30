import './_color-palette.scss';
import { useState } from 'react';
import Button from './foundations/Button/Button.js';
import Menu from './foundations/Menu/Menu.js';
import Checkbox from './foundations/Checkbox/Checkbox.js'
import { colorOptions } from './ColorOptions.js'
import PrimaryColor from './PrimaryColor.js';
import Stops from './Stops.js'

function ColorPalette(props) {
  const {
    pickedColors,
    setPickedColors,
    hex,
    primary,
    setPrimary,
    stops,
    setStops
  } = props;

  return (
    <article className="Color__palette">
      <div>
        <header><h5>Color Palette</h5></header>

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

      <div>
        <PrimaryColor
          pickedColors={pickedColors}
          setPrimary={setPrimary}
          primary={primary}
        />
      </div>

      <div>
        <Stops
          stops={stops}
          setStops={setStops}
        />
      </div>

    </article >
  );
}

export default ColorPalette;
