import { useEffect, useState } from 'react';
import './_tabs-pages.scss';
import uuid from 'react-uuid';
import ColorPill from '../foundations/ColorPill/ColorPill'
import { useOutletContext } from "react-router-dom";


function SemanticTokens(props) {
  const { semanticColorTokens, setActiveTab } = useOutletContext();

  useEffect(() => {
    setActiveTab('Semantic');
  })

  return (
    <div className="Page" >
      <div className="Row">
        <h5>Background Colors</h5>
        <div className="Details-grid__large">
          {semanticColorTokens && Object.keys(semanticColorTokens).map((key) => (key.includes('background') &&
            <ColorPill
              key={uuid()}
              size="long"
              hsl={semanticColorTokens[key].hsl}
              color={`${key}:`}
              color2={semanticColorTokens[key].token}
            />))}
        </div>
      </div>

      <div className="Row">
        <h5>Font Colors</h5>
        <div className="Details-grid__large">
          {semanticColorTokens && Object.keys(semanticColorTokens).map((key) => (key.includes('font') &&
            <ColorPill
              key={uuid()}
              size="long"
              hsl={semanticColorTokens[key].hsl}
              color={`${key}:`}
              color2={semanticColorTokens[key].token}
            />))}
        </div>
      </div>
    </div >
  );
}

export default SemanticTokens;