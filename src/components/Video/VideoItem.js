import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { playVideo } from "../../redux/videoSlice";
import StyledVideoItem from "./StyledVideoItem";
import videoPropTypes from "./videoPropTypes";

function VideoItem({ className, videoProps }) {
  const dispatch = useDispatch();

  const {
    videoId,
    snippet: { title, channelTitle, thumbnails },
  } = videoProps;

  const thumbnail = thumbnails.default.url;

  const handlePlay = (e) => {
    e.preventDefault();
    dispatch(playVideo(videoId));
  };

  return (
    <StyledVideoItem className={`${className}`}>
      <a
        href={`#video-${videoId}`}
        onClick={(e) => handlePlay(e)}
        className={`${className}__link`}
      >
        <div className={`${className}__thumb`}>
          <img
            className={`${className}__thumb__image`}
            src={thumbnail}
            alt={title}
          />
        </div>
        <div
          className={`${className}__title`}
        >{`${title} by ${channelTitle}`}</div>
      </a>
    </StyledVideoItem>
  );
}

VideoItem.propTypes = {
  className: PropTypes.string,
  videoProps: PropTypes.shape(videoPropTypes).isRequired,
};

VideoItem.defaultProps = {
  className: "video-item",
};

export default VideoItem;
