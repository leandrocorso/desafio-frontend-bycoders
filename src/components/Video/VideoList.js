import PropTypes from "prop-types";
import styled from "styled-components";

const StyledVideoList = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

function VideoList({ children }) {
  return <StyledVideoList className="videos">{children}</StyledVideoList>;
}

VideoList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default VideoList;
