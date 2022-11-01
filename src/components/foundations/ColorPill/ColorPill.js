import './_color-pill.scss';
import { useEffect, useState } from 'react';


function ColorPill(props) {
  const {
    hsl,
    color,
    size,
    color2
  } = props;


  return (
    <div className={size === "long" ? "Pill Long" : "Pill"}>
      <div className={color === '$token-color-white' || color2 === '$token-color-white' ? "Box Outline" : "Box"} aria-label="color" style={{ backgroundColor: hsl }} />
      <p className="Small">{color}</p>
      <p className="Small">{color2}</p>
    </div>
  );
}

export default ColorPill;
