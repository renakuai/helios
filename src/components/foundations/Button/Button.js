import { Btn, Path } from './_button.styled';
import { useState } from 'react';
import '../../../build/css/_global.css';

function Button(props) {

  const {
    type,
    iconRight,
    iconLeft,
    children,
    onClick
  } = props;


  return (
    <Btn
      type={type}
      iconright={iconRight}
      iconleft={iconLeft}
      onClick={onClick}
    >
      {iconLeft && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d={iconLeft} /></svg>}
      {children}
      {iconRight && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d={iconRight} /></svg>}
    </Btn>
  );
}

export default Button;
