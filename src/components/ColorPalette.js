import './color-palette.scss';
import { useState } from 'react';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import Button from './foundations/Button/Button.js';
import Menu from './foundations/Menu/Menu.js';
import Checkbox from './foundations/Checkbox/Checkbox.js'
import { colorOptions } from './ColorOptions.js'


function ColorPalette(props) {
  const { pickedColors, setPickedColors, hex } = props;



  return (
    <article className="Color__palette">
      <header><h5>Color Palette</h5></header>
      <div>
        <Menu>
          {colorOptions.map((col) => (
            <Checkbox
              hex={hex}
              pickedColors={pickedColors}
              setPickedColors={setPickedColors}>{col.name}</Checkbox>
          ))}
        </Menu>
      </div>
    </article >
  );
}

export default ColorPalette;
