import { Btn, path } from './_button.styled';
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

  const setIconColor = `${type === "primary" ? "#FFF" : props.semanticColorTokens['$token-color-background-action-primary'].hsl}`

  return (
    <Btn
      type={type}
      iconright={iconRight}
      iconleft={iconLeft}
      radius={radius}
      size={size}
      semanticColorTokens={semanticColorTokens}
    >
      {iconLeft && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={iconLeft} fill={setIconColor} /></svg>}
      {children}
      {iconRight && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d={iconRight} fill={setIconColor} /></svg>}
    </Btn>
  );
}

export default Button;
