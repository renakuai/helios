import { Btn } from './_button.styled';
import { useState } from 'react';


function Button(props) {

  const {
    type,
    iconRight,
    iconLeft,
    children,
    semanticColorTokens,
    radius
  } = props;

  return (
    <Btn
      type={type}
      iconright={iconRight}
      iconleft={iconLeft}
      radius={radius}
      semanticColorTokens={semanticColorTokens}
    >
      {children}
    </Btn>
  );
}

export default Button;
