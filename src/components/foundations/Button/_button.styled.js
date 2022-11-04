import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  gap: 0.25rem;
  justify-content: center;
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
  ${props => props.type === 'danger' && `
    background-color: ${props.semanticColorTokens['$token-color-background-action-danger-default'].hsl};
    border: 2px solid ${props.semanticColorTokens['$token-color-background-action-danger-default'].hsl};
    color: #fff;
    &:hover {
      background-color: ${props.semanticColorTokens['$token-color-background-action-danger-hover'].hsl};
      border: 2px solid ${props.semanticColorTokens['$token-color-background-action-danger-hover'].hsl};
    }
    `
  }};
  ${props => props.type === 'disabled' && `
    background-color: ${props.semanticColorTokens['$token-color-background-action-disabled'].hsl};
    border: 2px solid ${props.semanticColorTokens['$token-color-background-action-disabled'].hsl};
    color: ${props.semanticColorTokens['$token-color-font-secondary'].hsl};
    &:hover {
      cursor: none
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
  height: 36px;
${props => props.size === 'large' && `
  padding: 0.65rem 1.15rem;
  height: 40px
`
  }};
${props => props.size === 'small' || !props.size && `
  padding: 0.5rem 1rem;
  height: 36px
`
  }};
  font-weight: 600;
  &:hover {
    cursor: pointer
  }
`

const path = styled.path`
  fill: #fff
`