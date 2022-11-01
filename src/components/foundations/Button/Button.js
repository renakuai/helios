import { Btn } from './_button.styled';
import { useState } from 'react';


function Button(props) {

  const {
    type,
    iconRight,
    iconLeft,
    children,
    onClick,
    semanticColorTokens,
    radius
  } = props;

  return (
    <Btn
      type={type}
      iconright={iconRight}
      iconleft={iconLeft}
      onClick={onClick}
      radius={radius}
      semanticColorTokens={semanticColorTokens}
    >
      {children}
    </Btn>
  );
}

export default Button;
