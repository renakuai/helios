import { useEffect } from 'react';
import ColorPill from './foundations/ColorPill/ColorPill.js';
import './_global-tokens.scss';
import uuid from 'react-uuid';


function GlobalTokens(props) {

  const {
    tints
  } = props

  console.log(tints)

  return (
    <div className="Tokens__global">
      {tints && Object.keys(tints).map(key => (
        <div className="Color__section" key={uuid()}>
          <h5 key={uuid()}>{key[0].toUpperCase() + key.substring(1)}</h5>
          <div className="Hue__section" key={key + '_section'}>
            {Object.keys(tints[key]).map(hue => (
              <div className="Hue" key={uuid()}>
                <ColorPill
                  color={`$token-color-${key}-${hue}`}
                  hsl={tints[key][hue]}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GlobalTokens;