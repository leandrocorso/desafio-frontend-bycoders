import PropTypes from "prop-types";
import styled from "styled-components";

const StyledVideoItem = styled.li`
  display: flex;
  gap: calc(${({ theme }) => theme.spacement} / 2);
  border: 1px solid blue;

  .videos__thumb {
    border: 1px solid red;
    max-width: 160px;
    max-height: 160px;
    min-width: 90px;
    min-height: 90px;
    width: 8vw;
    height: 8vw;
  }

  .videos__title {
    font-size: 0.9rem;
  }
`;

function VideoItem({ title, thumb }) {
  return (
    <StyledVideoItem className="videos__item">
      <div className="videos__thumb">{thumb}</div>
      <div className="videos__title">{title}</div>
    </StyledVideoItem>
  );
}

VideoItem.propTypes = {
  title: PropTypes.string,
  thumb: PropTypes.string,
};

VideoItem.defaultProps = {
  title: "",
  thumb: "",
};

export default VideoItem;
