import { useState } from 'react';
import Dropdown from './foundations/Dropdown/Dropdown.js'


function PrimaryColor(props) {

  const { pickedColors, setPrimary, primary, open, setOpen } = props;

  return (
    <article className="Color__primary">
      <div>
        <Dropdown
          label="Primary Color:"
          name="primaryColor"
          disabledMsg="No colors selected"
          options={pickedColors}
          setState={setPrimary}
          state={primary}
          open={open}
          setOpen={setOpen}
          helper="This is the defining color across your design system based on the color palette you've selected above."
        />
      </div>
    </article >
  );
}

export default PrimaryColor;
