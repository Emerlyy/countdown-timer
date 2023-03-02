import styled from "styled-components"

export const Link = styled.a`
  &:hover{
    svg > path{
      transition: fill .1s;
      fill: var(--colors-timer-text);
    }
  }
`