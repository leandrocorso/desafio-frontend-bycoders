import PropTypes from "prop-types";

import VideoItem from "./VideoItem";
import videoPropTypes from "./videoPropTypes";

function VideoList({ className, videos }) {
  return (
    <ul className={className}>
      {videos.map((video) => (
        <VideoItem
          key={video.videoId}
          className={`${className}__item`}
          videoProps={video}
        />
      ))}
    </ul>
  );
}

VideoList.propTypes = {
  className: PropTypes.string,
  videos: PropTypes.arrayOf(PropTypes.shape(videoPropTypes)).isRequired,
};

VideoList.defaultProps = {
  className: "video-list",
};

export default VideoList;
