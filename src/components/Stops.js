import { useState } from 'react';
import Dropdown from './foundations/Dropdown/Dropdown.js'


function Stops(props) {

  const { stops, setStops } = props;

  const options = [3, 4, 5, 5, 6, 7, 8, 9]

  return (
    <article className="Color__primary">
      <div>
        <Dropdown
          label="Lightness Stops:"
          name="primaryColor"
          disabledMsg="No colors selected"
          options={options}
          state={stops}
          setState={setStops}
          helper="Defines the number of tints / shades for each selected color."
        />
      </div>
    </article >
  );
}

export default Stops;
