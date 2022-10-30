import './_dropdown.scss';
import { useState } from 'react';


function Dropdown(props) {

  const [open, setOpen] = useState(false);

  const {
    options,
    label,
    disabledMsg,
    state,
    setState,
    helper
  } = props

  function handleChange(e) {

    if (options.length > 0) {
      setOpen(!open);
    }
  }

  function handleSelect(e) {
    setState(e.target.id)
  }


  return (
    <div className="Dropdown">
      <p className="Label">{label}</p>
      <p className="Xsmall">{helper}</p>
      <button
        type="button"
        className={options.length > 0 ? "Active" : "Disabled"}
        onClick={(e) => handleChange(e)}
      >
        <div className="Options"
        >
          {options.length > 0 ? state : disabledMsg}
          <img src="/icons/arrow-drop-down.svg" />
        </div>
      </button>

      {open && <ul className="List" onClick={handleChange} >
        {options.map((item) => (
          <li
            key={'list-' + item}
            id={item}
            onClick={(e) => handleSelect(e)}
            className={item === state && 'Bold'}
          >{item}</li>))}
      </ul>}
    </div>
  );
}

export default Dropdown;
