import { useEffect, useState } from 'react';
import ColorPill from '../foundations/ColorPill/ColorPill.js';
import './_tabs-pages.scss';
import uuid from 'react-uuid';
import Code from '../foundations/Code/Code.js';
import { useOutletContext } from "react-router-dom";
import Button from '../foundations/Button/Button.js';


function GlobalTokens() {

  const { setActiveTab, globalColorTokens, globalSizeTokens, stops
  } = useOutletContext();

  const [formatted, setFormatted] = useState({ color: {} })
  const [code, setCode] = useState('Show code')

  const [globalSpacingTokens, setGlobalSpacingTokens] = useState({
    "$token-spacing-2x-small": "0.25rem",
    "$token-spacing-small": "0.5rem",
    "$token-spacing-base": "1rem",
    "$token-spacing-large": "1.5rem",
    "$token-spacing-2x-large": "2rem",
    "$token-spacing-3x-large": "3rem"
  })

  const [globalRadiusTokens, setGlobalRadiusTokens] = useState({
    "$token-radius-small": "0.25rem",
    "$token-radius-medium": "0.5rem",
    "$token-radius-large": "4rem",
  })

  const [globalFontTokens, setGlobalFontTokens] = useState({
    "$token-font-weight-bold": "700",
    "$token-font-weight-semibold": "600",
    "$token-font-weight-regular": "500",
    "$token-font-size-5x-large": "3rem",
    "$token-font-size-4x-large": "2.5rem",
    "$token-font-size-3x-large": "2rem",
    "$token-font-size-2x-large": "1.5rem",
    "$token-font-size-large": "1.15rem",
    "$token-font-size-base": "1rem",
    "$token-font-size-small": "0.9rem",
    "$token-font-size-2x-small": "0.75rem",
  })

  useEffect(() => {
    setActiveTab('Global');
  })

  useEffect(() => {

    setFormatted({ color: {} })


    Object.keys(globalColorTokens).map(key => {
      if (key === 'white' || key === 'black') {
        setFormatted(prevState => ({
          ...prevState,
          "color": {
            ...prevState.color,
            [key]: {
              value: globalColorTokens[key]
            }
          }
        }))
      }
      else {
        Object.keys(globalColorTokens[key]).map(item => (
          setFormatted(prevState => ({
            ...prevState,
            "color": {
              ...prevState.color,
              [key]: {
                ...prevState.color[key],
                [item.slice(-2)]: {
                  value: globalColorTokens[key][item]
                }
              }
            }
          }))
        ))
      }
    })

  }, [globalColorTokens])

  function handleClick() {
    if (code === 'Show code') {
      setCode('Hide code')
    }
    else {
      setCode('Show code')
    }
  }


  return (
    <div className="Page">

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
              {JSON.stringify(formatted, null, 4)}
            </pre>
          </Code>
        </div>
      </div>


      <div className="Row">
        <h5>Colors</h5>
        {Object.keys(globalColorTokens).map(key => (
          <div className="Row" key={uuid()} >
            <h6 key={uuid()}>{key[0].toUpperCase() + key.substring(1)}</h6>
            <div className="Details-grid" key={key + '_section'}>
              {(key === 'white' || key === 'black') ? <ColorPill
                color={`$token-color-${key}`}
                hsl={globalColorTokens[key]}
              /> : Object.keys(globalColorTokens[key]).map(hue => (
                <div className="Hue" key={uuid()}>
                  <ColorPill
                    color={`${hue}`}
                    hsl={globalColorTokens[key][hue]}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="Row">
        <div className="Details-grid">

          <div>
            <h5>Spacing</h5>
            {Object.keys(globalSpacingTokens).map(key => (
              <p className="Small ">{key}: {globalSpacingTokens[key]}</p>
            ))}
          </div>

          <div>
            <h5>Radius</h5>
            {Object.keys(globalRadiusTokens).map(key => (
              <p className="Small ">{key}: {globalRadiusTokens[key]}</p>
            ))}
          </div>

          <div>
            <h5>Font</h5>
            {Object.keys(globalFontTokens).map(key => (
              <p className="Small ">{key}: {globalFontTokens[key]}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalTokens;