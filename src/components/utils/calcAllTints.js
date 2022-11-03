
export function calcAllTints(color, stops, setTints) {

  const baseColors = {
    'grey': 'hsl(0,0%,',
    'purple': 'hsl(265,86%,',
    'plum': 'hsl(281,52%,',
    'blue': 'hsl(212,77%,',
    'cobalt': 'hsl(227,86%,',
    'turquoise': 'hsl(187,80%,',
    'teal': 'hsl(187,33%,',
    'green': 'hsl(146,83%,',
    'fern': 'hsl(119,24%,',
    'yellow': 'hsl(55,100%,',
    'corn': 'hsl(43,82%,',
    'orange': 'hsl(39,100%,',
    'brick': 'hsl(11,55%,',
    'rust': 'hsl(25,74%,',
    'red': 'hsl(4,100%,',
    'magenta': 'hsl(292,83%,',
    'pink': 'hsl(324,95%,'
  }

  const lightness = calcLightness(color, stops);
  let colorVal = 0;
  let start = 0;
  let HSL = baseColors[color];
  const copy = [];

  lightness.forEach(val => {
    colorVal += 10;
    copy[color] = { ...copy[color] };
    copy[color][colorVal] = HSL + val;
    setTints(prevState => ({
      ...prevState,
      [color]: copy[color]
    }))
    start++;
  })
}

//calculate the list of lightness vals
function calcLightness(color, stops) {
  let val = '';
  if (color === 'grey') {
    val = Math.ceil((88 / (stops - 1)))
  }
  else {
    val = Math.ceil((78 / (stops - 1)))
  }
  let start = 96;
  const l = [96 + '%)'];
  for (let i = 0; i < stops - 1; i++) {
    l.push((start -= val) + '%)')
  }
  return (l)
}