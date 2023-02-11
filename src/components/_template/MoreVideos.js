import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectVideos } from "../../redux/videoSlice";
import InnerWrapper from "../InnerWrapper";
import { VideoList } from "../Video";

function MoreVideos() {
  const storageVideos = useSelector(selectVideos);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const moreVideos = storageVideos.data.itemsByUse?.moreVideos;
    if (moreVideos) setVideos(moreVideos);
  }, [storageVideos]);

  return (
    <div className="more-videos">
      <InnerWrapper>
        <h3 className="more-videos__title">More videos</h3>

        {videos && <VideoList className="more-videos__list" videos={videos} />}
      </InnerWrapper>
    </div>
  );
}

export default MoreVideos;
