import { Btn } from './_button.styled';
import { useState } from 'react';


function Button(props) {

  const {
    type,
    iconRight,
    iconLeft,
    children,
    semanticColorTokens,
    radius,
    size
  } = props;

  return (
    <Btn
      type={type}
      iconright={iconRight}
      iconleft={iconLeft}
      radius={radius}
      size={size}
      semanticColorTokens={semanticColorTokens}
    >
      {iconRight}
      {children}
      {iconLeft}
    </Btn>
  );
}

export default Button;
