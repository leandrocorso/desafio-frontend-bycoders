import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import {
  Advertising,
  Featured,
  MoreVideos,
  SiteHeader,
} from "./components/_template";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import { fetchVideos, selectVideos } from "./redux/videoSlice";

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
  const { isLoading, error } = useSelector(selectVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  return (
    <StyledApp>
      <SiteHeader />
      {isLoading && <Loader />}
      {error && <ErrorMessage msg={error} />}
      {!isLoading && !error && (
        <>
          <Featured />
          <Advertising />
          <MoreVideos />
        </>
      )}
    </StyledApp>
  );
}

export default App;
