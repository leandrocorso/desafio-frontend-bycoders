import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectVideos } from "../../redux/videoSlice";

function VideoPlayer({ className }) {
  const videos = useSelector(selectVideos);

  const [videoOnPlayer, setVideoOnPlayer] = useState({});

  useEffect(() => {
    if (videos?.data?.itemsByUse?.videoOnPlayer) {
      setVideoOnPlayer(videos.data.itemsByUse.videoOnPlayer);
    }
  }, [videos]);

  return (
    <div className={className}>
      {videoOnPlayer && (
        <>
          <div className={`${className}__embed`}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoOnPlayer.videoId}?autoplay=1`}
              title={videoOnPlayer.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className={`${className}__title`}>
            <h1>{videoOnPlayer?.snippet?.title || ""}</h1>
          </div>
          <div className={`${className}__channel-title`}>
            <p>By {videoOnPlayer?.snippet?.channelTitle || ""}</p>
          </div>
        </>
      )}
    </div>
  );
}

VideoPlayer.propTypes = {
  className: PropTypes.string,
};

VideoPlayer.defaultProps = {
  className: "video-player",
};

export default VideoPlayer;
