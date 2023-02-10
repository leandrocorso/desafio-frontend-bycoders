import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { playVideo } from "../../redux/videoSlice";

const StyledVideoItem = styled.li`
  display: flex;
  gap: calc(${({ theme }) => theme.spacement} / 2);
  border: 1px solid blue;

  .videos__title {
    width: 100%;
    font-size: 0.9rem;
    /* display: none; */
    /* padding-left: calc(120px + ${({ theme }) => theme.spacement} / 2); */
  }
`;

const StyledThumb = styled.div`
  width: 120px;
  height: 68px;
  /* background: url(${({ url }) => url}) center no-repeat; */
`;

function VideoItem({ id, snippet }) {
  const dispatch = useDispatch();
  const handlePlay = (videoId) => dispatch(playVideo(videoId));

  const { title, channelTitle } = snippet;
  const thumb = snippet.thumbnails?.default;

  return (
    <StyledVideoItem className="videos__item">
      <a href="#video" onClick={() => handlePlay(id)}>
        <StyledThumb>
          <img src={thumb?.url} alt={title} />
        </StyledThumb>
        <div className="videos__title">{`${title} by ${channelTitle}`}</div>
      </a>
    </StyledVideoItem>
  );
}

VideoItem.propTypes = {
  id: PropTypes.string.isRequired,
  snippet: PropTypes.shape({
    title: PropTypes.string,
    channelTitle: PropTypes.string,
    thumbnails: PropTypes.shape({
      default: PropTypes.shape({
        url: PropTypes.string,
        with: PropTypes.number,
        height: PropTypes.number,
      }),
    }),
  }),
};

VideoItem.defaultProps = {
  snippet: {},
};

export default VideoItem;
