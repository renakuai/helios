import './side.scss';
import ColorPalette from './ColorPalette.js';

function Palette(props) {

  const { stops, tints, pickedColors, setPickedColors, hex } = props

  return (
    <div className="Side">
      <ColorPalette
        pickedColors={pickedColors}
        setPickedColors={setPickedColors}
        hex={hex}
      />
    </div>
  );
}

export default Palette;