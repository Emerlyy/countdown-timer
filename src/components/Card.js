import { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin:0;
  display: inline-flex;
  flex-direction: column;
  font-weight: var(--fw-bold);
  border-radius: .3em;
  overflow: hidden;
  background-color: var(--colors-mostly-black);
  box-shadow: 0 8px 0 0 var(--colors-mostly-black);
  letter-spacing: -2px;

  &:before, &:after{
    content: '';
    position: absolute;
    width: 11px;
    height: 11px;
    background-color: var(--colors-mostly-black);
    top:50%;
    z-index: 1;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &:before{
    left: -5px;
  }

  &:after{
    right: -5px;
  }
`
const Top = styled.div`
 color: var(--colors-timer-text);
  width: 1.9em;
  height: 0.9em;  
  background-color: hsl(236, 21%, 23%);
  font-size: 4.2rem;
  line-height: 1.3;
  padding: .25em;
  overflow: hidden;
  border-top-left-radius: .1em;
  border-top-right-radius: .1em;
  border-bottom: 1px solid hsl(234, 17%, 12%, .1);
  text-align: center;
`

const Bottom = styled.div`
  width: 1.9em;
  position: relative;
  height: 0.9em;  
  background-color: hsl(236, 21%, 26%);
  font-size: 4.2rem;
  line-height: 1.3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: .25em;
  overflow: hidden;
  color: var(--colors-timer-text-soft);
  border-bottom-left-radius: .1em;
  border-bottom-right-radius: .1em;

  &:before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: '';
    top: 0;
    left: 0;
    background-color: hsl(237, 18%, 59%);
    opacity: .1;
  }
`

export const Card = memo(({ children }) => {
  return (
    <Wrapper>
      <Top>{children < 10 ? '0' + children : children}</Top>
      <Bottom>{children < 10 ? '0' + children : children}</Bottom>
    </Wrapper>
  );
});