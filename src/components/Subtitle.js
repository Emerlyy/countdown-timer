import { memo } from "react";
import styled from "styled-components";

export const Subtitle = memo(styled.h3`
  margin: 25px 0 0 0;
  padding: 0;
  color: var(--colors-timer-subtitle);
  text-transform: uppercase;
  text-align: center;
  font-size: .7rem;
  letter-spacing: .4rem;
`)