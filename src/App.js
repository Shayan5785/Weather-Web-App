import styled from "styled-components";
import bg from "./Assets/bg.jpg"
import Weather from "./Components/Weather";

function App() {
  return (
    <>
      <Styledimg src={bg} />
      <Weather/>
    </>
  );
}

const Styledimg = styled.img`
  filter: blur(6px);
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1
`

export default App;
