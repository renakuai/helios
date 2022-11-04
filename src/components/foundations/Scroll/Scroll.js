import './_scroll.scss';
import { useState } from 'react';


function Scroll(props) {

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

export default Scroll;
