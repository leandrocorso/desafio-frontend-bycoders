import styled from "styled-components";
import Advertising from "./components/_template/Advertising";
import Featured from "./components/_template/Featured";
import MoreVideos from "./components/_template/MoreVideos";
import SiteHeader from "./components/_template/SiteHeader";

const StyledApp = styled.div`
  max-width: 95vw;
  margin: ${({ theme }) => theme.spacement} auto
    ${({ theme }) => theme.spacement} auto;
  display: grid;
  grid-template-areas:
    "header header"
    "featured advertising"
    "more-videos more-videos";
  grid-template-columns: 7fr 3fr;
  gap: ${({ theme }) => theme.spacement};
`;

function App() {
  return (
    <StyledApp>
      <SiteHeader />
      <Featured />
      <Advertising />
      <MoreVideos />
    </StyledApp>
  );
}

export default App;
