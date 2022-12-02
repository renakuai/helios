import { useEffect, useState } from 'react';
import './_tabs-pages.scss';
import uuid from 'react-uuid';
import ColorPill from '../foundations/ColorPill/ColorPill'
import { useOutletContext } from "react-router-dom";
import Button from '../foundations/Button/Button.js';
import Code from '../foundations/Code/Code.js';




function SemanticTokens(props) {
  const { semanticColorTokens, setActiveTab } = useOutletContext();
  const [code, setCode] = useState('Show code')


  useEffect(() => {
    setActiveTab('Semantic');
  })

  function handleClick() {
    if (code === 'Show code') {
      setCode('Hide code')
    }
    else {
      setCode('Show code')
    }
  }

  return (
    <div className="Page" >

      <Button
        type="primary"
        onClick={handleClick}
      >
        {code}</Button>

      <div
        className="Row"
        style={{ display: code === 'Show code' ? 'none' : 'block' }}
      >
        <div>
          <Code language="JSON">
            <pre>
              {JSON.stringify(semanticColorTokens, null, 4)}
            </pre>
          </Code>
        </div>
      </div>

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

      <div className="Row">
        <h5>Border Colors</h5>
        <div className="Details-grid__large">
          {semanticColorTokens && Object.keys(semanticColorTokens).map((key) => (key.includes('border') &&
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