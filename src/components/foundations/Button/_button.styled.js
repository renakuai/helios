import styled from "styled-components";

export const Btn = styled.button`
  box-sizing: border-box;
  ${props => props.type === 'primary' && `
    background-color: ${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl};
    border: 2px solid ${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl};
    color: #fff;
    &:hover {
      background-color: ${props.semanticColorTokens['$token-color-background-action-primary-hover'].hsl};
      border: 2px solid ${props.semanticColorTokens['$token-color-background-action-primary-hover'].hsl};
    }
    `
  }};
  ${props => props.type === 'secondary' && `
    background-color: ${props.semanticColorTokens['$token-color-background-action-secondary-default'].hsl};
    border: 2px solid ${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl};
    color: ${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl};
    &:hover {
      background-color: ${props.semanticColorTokens['$token-color-background-action-secondary-hover'].hsl};
    }
    `
  }};
  ${props => props.type === 'tertiary' && `
    background-color: #FFF;
    border: none;
    border: 2px solid #FFF;
    color: ${props.semanticColorTokens['$token-color-background-action-primary-default'].hsl};
    &:hover {
      background-color: ${props.semanticColorTokens['$token-color-background-action-secondary-hover'].hsl};
      border: 2px solid ${props.semanticColorTokens['$token-color-background-action-secondary-hover'].hsl};
    }
    `
  }}
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
  }};
${props => props.size === 'large' && `
  padding: 0.65rem 1.15rem;
`
  }};
${props => props.size === 'small' && `
  padding: 0.5rem 1rem;
`
  }};
  font-weight: 600;
  &:hover {
    cursor: pointer
  }
`