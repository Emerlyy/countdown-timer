import styled from 'styled-components';
import { Footer } from './components/Footer';
import { Timer } from './components/Timer';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('/images/bg-stars.svg'), var(--colors-bg);
  height: 100vh;
`

const Main = styled.section`
  flex-grow: 1;
  padding: 120px 0 0 0;
`

const Title = styled.h1`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  text-align: center;
  color: var(--colors-white);
  font-weight: var(--fw-bold);
  font-size: 1.1rem;
  line-height: 1rem;
  letter-spacing: .4rem;
`

function App() {
  const date = new Date().setHours(new Date().getHours() + 336);

  return (
    <Body>
      <Main>
        <Title>We're launching soon</Title>
        <Timer countToDate={date} />
      </Main>
      <Footer />
    </Body >
  );
}

export default App;