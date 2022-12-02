export function calcSemanticColorTokens(name, stops, setSemanticColorTokens, hues, main) {
  let option = '';
  let count = '';
  if (main === 'grey' || main === 'red') {
    stops = 9
  }
  if (name === '$token-color-background-action-primary' || name === '$token-color-border-action-primary' || name === '$token-color-border-action-secondary-hover' || name === '$token-color-border-action-secondary' || name === '$token-color-font-tertiary' || name === '$token-color-border-tertiary') {
    if (stops <= 4) {
      count = (stops) * 10
    }
    else if (stops > 4 && stops < 8) {
      count = (stops - 1) * 10
    }
    else if (stops >= 8) {
      count = (stops - 2) * 10
    }
    option = hues[`$token-color-${main}-${count}`]
    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-${count}`,
        "hsl": option
      }
    }))
  }
  else if (name === '$token-color-background-action-primary-hover' || name === '$token-color-border-action-primary-hover') {

    if (stops <= 4) {
      count = (stops) * 10
    }
    else if (stops > 4 && stops < 8) {
      count = (stops - 1) * 10
    }
    else if (stops >= 8) {
      count = (stops - 2) * 10
    }
    option = hues[`$token-color-${main}-${count - 10}`]
    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-${count - 10}`,
        "hsl": option
      }
    }))
  }

  else if (name === '$token-color-background-action-secondary' || name === '$token-color-background-action-tertiary') {
    option = hues[`$token-color-white`]

    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-white`,
        "hsl": option
      }
    }))
  }

  else if (name === '$token-color-background-action-secondary-hover' || name === '$token-color-background-info' || name === '$token-color-background-action-tertiary-hover' || name === '$token-color-border-action-tertiary' || name === name === '$token-color-background-action-tertiary-hover') {
    option = hues[`$token-color-${main}-10`]

    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-10`,
        "hsl": option
      }
    }))
  }
  else if (name === '$token-color-font-link') {
    if (stops <= 4) {
      count = (stops) * 10
    }
    else if (stops > 4 && stops <= 9) {
      count = (stops - 1) * 10
    }
    option = hues[`$token-color-${main}-${count}`]
    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-${count}`,
        "hsl": option
      }
    }))
  }
  else if (name === '$token-color-font-link-hover') {
    if (stops <= 4) {
      count = (stops - 1) * 10
    }
    else if (stops > 4 && stops <= 9) {
      count = (stops - 2) * 10
    }
    option = hues[`$token-color-${main}-${count}`]
    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-${count}`,
        "hsl": option
      }
    }))
  }
  else if (name === '$token-color-font-info' || name === '$token-color-font-tertiary') {
    count = stops * 10
    option = hues[`$token-color-${main}-${count}`]

    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-${count}`,
        "hsl": option
      }
    }))
  }
  else if (name === '$token-color-border-selected') {
    count = Math.ceil(stops / 2) * 10;
    option = hues[`$token-color-${main}-${count}`]

    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-${count}`,
        "hsl": option
      }
    }))
  }
}