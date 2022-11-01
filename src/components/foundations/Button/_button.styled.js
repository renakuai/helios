import styled from "styled-components";

export const Btn = styled.button`
  box-sizing: border-box;
  border-radius: ${props => {
    switch (props.radius) {
      case ('small'):
        return '0.25rem';
      case ('medium'):
        return '0.5rem';
      case ('large'):
        return '5rem';
      default:
        break;
    }
  }
  };
  font-weight: 600;
  background-color: ${props => {
    switch (props.type) {
      case ('primary'):
        return `${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl}`;
      case ('secondary'):
        return '#FFF';
      default:
        break;
    }
  }
  };
  border: ${props => {
    switch (props.type) {
      case ('primary'):
        return `2px solid ${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl}`
      case ('secondary'):
        return `2px solid ${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl}`;
      default:
        break;
    }
  }};
  padding: 0.5rem 1rem;
  color: ${props => {
    switch (props.type) {
      case ('primary'):
        return '#fff'
      case ('secondary'):
        return `${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl}`;
      default:
        break;
    }
  }
  }
`