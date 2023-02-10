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
    videoOnPlayer && (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${videoOnPlayer.id}?autoplay=1`}
        title={videoOnPlayer.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    )
  );
}

export default VideoPlayer;
