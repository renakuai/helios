import './_color-pill.scss';
import { useEffect, useState } from 'react';


function ColorPill(props) {
  const {
    hsl,
    color
  } = props;

  return (
    <div className="Pill">
      <div className="Box" aria-label="color" style={{ backgroundColor: hsl }} />
      <p className="Small">{color[0].toUpperCase() + color.substring(1)}</p>
    </div>
  );
}

export default ColorPill;
