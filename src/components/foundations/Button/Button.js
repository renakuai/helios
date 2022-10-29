import './_button.scss';
import { useState } from 'react';


function Button(props) {

  const {
    type,
    iconRight,
    iconLeft,
    children,
    onClick
  } = props;

  return (
    <button
      type={type}
      iconright={iconRight}
      iconleft={iconLeft}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
