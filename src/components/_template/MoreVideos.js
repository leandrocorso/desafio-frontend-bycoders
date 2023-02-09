import styled from "styled-components";
import { VideoItem, VideoList } from "../Video";
import InnerWrapper from "../InnerWrapper";

const StyledMoreVideos = styled.div`
  grid-area: more-videos;
  background-color: ${({ theme: { colors } }) => colors.lightGray};

  .videos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacement};
  }
`;

const videoItems = [
  { id: 1, title: "title 1", thumb: "thumb" },
  { id: 2, title: "title 2", thumb: "thumb" },
  { id: 3, title: "title 3", thumb: "thumb" },
];

function MoreVideos() {
  return (
    <StyledMoreVideos className="more-videos">
      <InnerWrapper>
        <VideoList>
          {videoItems.map(({ id, title, thumb }) => (
            <VideoItem key={id} title={title} thumb={thumb} />
          ))}
        </VideoList>
      </InnerWrapper>
    </StyledMoreVideos>
  );
}

export default MoreVideos;
