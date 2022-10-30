import './side.scss';
import ColorPalette from './ColorPalette.js';

function Palette(props) {

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
    <div className="Side">
      <ColorPalette
        pickedColors={pickedColors}
        setPickedColors={setPickedColors}
        hex={hex}
        primary={primary}
        setPrimary={setPrimary}
        stops={stops}
        setStops={setStops}
      />
    </div>
  );
}

export default Palette;