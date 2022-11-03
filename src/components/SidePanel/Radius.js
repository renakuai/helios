import { useState } from 'react';
import Dropdown from '../foundations/Dropdown/Dropdown.js'


function Radius(props) {

  const { radius, setRadius, open, setOpen } = props;

  const options = ['small', 'medium', 'large']

  return (
    <article className="Color__primary">
      <div>
        <Dropdown
          label="Border Radius:"
          disabledMsg="No colors selected"
          options={options}
          state={radius}
          setState={setRadius}
          open={open}
          setOpen={setOpen}
          helper="Defines the rounding intensity of your main elements."
        />
      </div>
    </article >
  );
}

export default Radius;
