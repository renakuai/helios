import './_checkbox.scss';
import { useState, useEffect } from 'react';


function Checkbox(props) {
  const {
    children,
    pickedColors,
    setPickedColors,
    hex
  } = props;

  const [foundHex, setFoundHex] = useState('')
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    hex.map(col => {
      if (col.name === children) {
        setFoundHex(col.color);
      }
    })
  }, [])

  const handleChange = (e) => {
    setChecked(!checked);

    if (!checked) {
      setPickedColors(prev => prev.concat(e.target.id))
    }
    else if (checked) {
      const filtered = pickedColors.filter(item => item !== e.target.id)
      setPickedColors(filtered)
    }

  };

  return (
    <div
      className="Checkbox"
    >
      <label>
        <input
          type="checkbox"
          id={children}
          checked={checked}
          onChange={(e) => handleChange(e)} />
        <div className="Pill__color" style={{ backgroundColor: foundHex }} aria-label="color" />
        {children[0].toUpperCase() + children.substring(1)}
      </label>
    </div>
  );
}

export default Checkbox;
