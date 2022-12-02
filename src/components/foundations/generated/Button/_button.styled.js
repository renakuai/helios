import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  gap: 0.25rem;
  justify-content: center;
  width: fit-content;
  ${props => props.type === 'primary' && `
    background-color: ${props.semanticColorTokens['$token-color-background-action-primary'].hsl};
    border: 2px solid ${props.semanticColorTokens['$token-color-border-action-primary'].hsl};
    color:  ${props.semanticColorTokens['$token-color-font-inverse'].hsl};
    &:hover {
      background-color: ${props.semanticColorTokens['$token-color-background-action-primary-hover'].hsl};
      border: 2px solid ${props.semanticColorTokens['$token-color-border-action-primary-hover'].hsl};
    }
    &:focus {
    }
    `
  }};
  ${props => props.type === 'danger' && `
    background-color: ${props.semanticColorTokens['$token-color-background-action-danger'].hsl};
    border: 2px solid ${props.semanticColorTokens['$token-color-background-action-danger'].hsl};
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
    background-color: ${props.semanticColorTokens['$token-color-background-action-secondary'].hsl};
    border: 2px solid ${props.semanticColorTokens['$token-color-border-action-secondary'].hsl};
    color: ${props.semanticColorTokens['$token-color-font-tertiary'].hsl};
    &:hover {
      background-color: ${props.semanticColorTokens['$token-color-background-action-secondary-hover'].hsl};
      border: 2px solid ${props.semanticColorTokens['$token-color-border-action-secondary-hover'].hsl};
    }
    `
  }};
  ${props => props.type === 'tertiary' && `
    background-color: #FFF;
    border: none;
    border: 2px solid #FFF;
    color: ${props.semanticColorTokens['$token-color-font-tertiary'].hsl};
    &:hover {
      background-color: ${props.semanticColorTokens['$token-color-background-action-tertiary-hover'].hsl};
      border: 2px solid ${props.semanticColorTokens['$token-color-border-action-tertiary-hover'].hsl};
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
  &:focus {
    border: ${props => `2px solid ${props.semanticColorTokens['$token-color-border-selected'].hsl}`}
  }
  &:active {
    border: ${props => `2px solid ${props.semanticColorTokens['$token-color-border-selected'].hsl}`}
  }
`

const path = styled.path`
  fill: #fff
`