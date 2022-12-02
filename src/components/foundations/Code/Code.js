import './_code.scss';
import { useState } from 'react';

function Code(props) {

  const {
    children,
    language
  } = props;

  return (
    <div
      className="Code"
    >
      <p className="Language">{language}</p>
      {children}
    </div>
  );
}

export default Code;
