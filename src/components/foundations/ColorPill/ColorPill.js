import './_color-pill.scss';
import { useEffect, useState } from 'react';


function ColorPill(props) {
  const [foundHex, setFoundHex] = useState('')

  useEffect(() => {
    hex.map(col => {
      if (col.name === name) {
        setFoundHex(col.color);
      }
    })
  }, [])

  const {
    name,
    hex
  } = props;


  console.log(foundHex)

  return (
    <div className="Pill">
      <div className="Pill__color" aria-label="color" style={{ backgroundColor: foundHex }} />
      <p className="Small">{name[0].toUpperCase() + name.substring(1)}</p>
    </div>
  );
}

export default ColorPill;
