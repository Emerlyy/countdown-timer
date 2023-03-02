import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTimer } from '../hooks/useTimer';
import { Card } from "./Card";
import { Subtitle } from './Subtitle';

const TimerEl = styled.div`
  margin-top: 96px;
  display: flex;
  column-gap: 25px;
  justify-content: center;
  align-items: center;
`

export const Timer = ({ countToDate }) => {

  const [days, hours, minutes, seconds] = useTimer(countToDate);

  return (
    <TimerEl>
      <div>
        <Card>{Math.floor(days)}</Card>
        <Subtitle>Days</Subtitle>
      </div>
      <div>
        <Card>{Math.floor(hours)}</Card>
        <Subtitle>Hours</Subtitle>
      </div>
      <div>
        <Card>{Math.floor(minutes)}</Card>
        <Subtitle>Minutes</Subtitle>
      </div>
      <div>
        <Card>{Math.floor(seconds)}</Card>
        <Subtitle>Seconds</Subtitle>
      </div>
    </TimerEl>
  );
};