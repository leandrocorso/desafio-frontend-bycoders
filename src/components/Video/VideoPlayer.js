import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectVideos } from "../../redux/videoSlice";

function VideoPlayer() {
  const videos = useSelector(selectVideos);

  const [videoOnPlayer, setVideoOnPlayer] = useState({});

  useEffect(() => {
    if (videos?.data?.itemsByUse?.videoOnPlayer) {
      setVideoOnPlayer(videos.data.itemsByUse.videoOnPlayer);
    }
  }, [videos]);

  return (
    videoOnPlayer && <div className="video-player">{videoOnPlayer.kind}</div>
  );
}

export default VideoPlayer;
