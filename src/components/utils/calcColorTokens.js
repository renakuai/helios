export function calcSemanticColorTokens(name, stops, setSemanticColorTokens, hues, main) {
  let option = '';
  let count = '';
  if (name === '$token-color-background-action-primary-default') {
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
  else if (name === '$token-color-background-action-primary-hover') {

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

  else if (name === '$token-color-background-action-secondary-default') {
    option = hues[`$token-color-white`]

    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-white`,
        "hsl": option
      }
    }))
  }

  else if (name === '$token-color-background-action-secondary-hover' || name === '$token-color-background-notif-info') {
    option = hues[`$token-color-${main}-10`]

    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-10`,
        "hsl": option
      }
    }))
  }
  else if (name === '$token-color-font-link-default') {
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
  else if (name === '$token-color-font-notif-info' || name === '$token-color-font-tertiary') {
    option = hues[`$token-color-${main}-80`]

    setSemanticColorTokens(prevState => ({
      ...prevState,
      [name]: {
        "token": `$token-color-${main}-80`,
        "hsl": option
      }
    }))
  }
}