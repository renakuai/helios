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
    background-color: var(--token-color-background-action-primary-default);
    border: 2px solid var(--token-color-border-action-primary-default);
    color:  var(--token-color-font-inverse);
    &:hover {
      background-color: var(--token-color-background-action-primary-hover);
      border: 2px solid var(--token-color-border-action-primary-hover);
    }
    `
  }};
  ${props => props.type === 'secondary' && `
    background-color: var(--token-color-background-action-secondary);
    border: 2px solid var(--token-color-border-action-secondary);
    color: var(--token-color-font-tertiary);
    &:hover {
      background-color: var(--token-color-background-action-secondary-hover);
      border: 2px solid var(--token-color-border-action-secondary-hover);
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
  }};
  border-radius: 5rem;
  height: 36px;
  font-weight: 600;
  &:hover {
    cursor: pointer
  }
`

export const Path = styled.path`
${props => props.type === 'primary' && `
 fill: $token-color-icon-inverse;
`
  }
`