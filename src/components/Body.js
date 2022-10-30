import './_body.scss';
import GlobalTokens from './GlobalTokens.js';

function Body(props) {

  const {
    stops,
    tints,
    pickedColors,
    setPickedColors,
    hex,
    primary,
    setPrimary,
    setStops
  } = props

  return (
    <div className="Body">
      <GlobalTokens tints={tints} />
    </div>
  );
}

export default Body;