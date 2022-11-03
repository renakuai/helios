import './_menu.scss';
import { useState } from 'react';


function Menu(props) {

  const {
    children
  } = props;

  return (
    <div
      className="Color__selector"
    >
      {children}
    </div>
  );
}

export default Menu;
