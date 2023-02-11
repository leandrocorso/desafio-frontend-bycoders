import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectVideos } from "../../redux/videoSlice";
import InnerWrapper from "../InnerWrapper";
import { VideoList, VideoPlayer } from "../Video";

function Featured() {
  const storageVideos = useSelector(selectVideos);
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState([]);

  useEffect(() => {
    const nextVideos = storageVideos.data.itemsByUse?.nextVideos;
    if (keyword) setKeyword(keyword);
    if (nextVideos) setVideos(nextVideos);
  }, [storageVideos]);

  return (
    <div className="featured">
      <InnerWrapper>
        <h3 className="featured__title">
          {keyword ? `Resultados da pesquisa por "${keyword}"` : "Featured"}
        </h3>

        <div className="featured__wrapper">
          <VideoPlayer className="featured__player" />
          {videos && <VideoList className="featured__list" videos={videos} />}
        </div>
      </InnerWrapper>
    </div>
  );
}

export default Featured;
