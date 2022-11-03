import './_body.scss';
import GlobalTokens from '../../TabsPages/GlobalTokens.js';
import SemanticTokens from '../../TabsPages/SemanticTokens.js';
import { useState } from 'react'
import { Outlet } from "react-router-dom"

function Body(props) {

  const {
    children
  } = props


  return (
    <div className="Body">
      {children}
    </div>
  );
}

export default Body;