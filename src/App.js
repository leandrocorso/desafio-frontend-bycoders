import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Template, {
  Advertising,
  Featured,
  MoreVideos,
} from "./components/_template";
import { fetchVideos, selectVideos } from "./redux/videoSlice";

function App() {
  const { isLoading, error } = useSelector(selectVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos());
  }, []);

  return (
    <Template isLoading={isLoading} error={error}>
      <Featured />
      <Advertising />
      <MoreVideos />
    </Template>
  );
}

export default App;
