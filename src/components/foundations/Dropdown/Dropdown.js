import './_dropdown.scss';
import { useEffect, useState, useRef } from 'react';
import uuid from 'react-uuid';



function Dropdown(props) {

  const ref = useRef(null)

  const {
    options,
    label,
    disabledMsg,
    state,
    setState,
    helper,
    open,
    setOpen
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
    <div className="Dropdown" ref={ref}>
      <p className="Label">{label}</p>
      <p className="Xsmall">{helper}</p>
      <button
        type="button"
        className={options.length > 0 ? "Active" : "Disabled"}
        onClick={(e) => handleChange(e)}
      >
        <div className="Options"
        >
          {options.length > 0 ? (typeof (state) === 'number' ? state : (state[0].toUpperCase() + state.substring(1))) : disabledMsg}
          <img className="Options" src="/icons/arrow-drop-down.svg" />
        </div>
      </button>

      {open && <ul className="List" onClick={handleChange} >
        {options.map((item) => (
          <li
            key={uuid()}
            id={item}
            onClick={(e) => handleSelect(e)}
            className={item === state ? 'Bold' : null}
          >{typeof (item) === 'number' ? item : item[0].toUpperCase() + item.substring(1)}</li>))}
      </ul>}
    </div>
  );
}

export default Dropdown;
