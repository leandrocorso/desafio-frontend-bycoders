import styled from "styled-components";

import InnerWrapper from "../InnerWrapper";
import { VideoItem,VideoList, VideoPlayer } from "../Video";

const StyledFeatured = styled.div`
  grid-area: featured;
  width: 100%;
  background-color: #ddd;

  .featured__wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: ${({ theme }) => theme.spacement};
  }

  .video-player {
    background-color: aqua;
  }

  .videos {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;

    &__thumb {
      background-color: aquamarine;
    }
  }
`;

function Featured() {
  const videoItems = [
    { id: 1, title: "title 1", thumb: "thumb" },
    { id: 2, title: "title 2", thumb: "thumb" },
    { id: 3, title: "title 3", thumb: "thumb" },
  ];

  return (
    <StyledFeatured className="featured">
      <InnerWrapper>
        <h3>Featured</h3>
        <div className="featured__wrapper">
          <VideoPlayer />

          <VideoList>
            {videoItems.map(({ id, title, thumb }) => (
              <VideoItem key={id} title={title} thumb={thumb} />
            ))}
          </VideoList>
        </div>
      </InnerWrapper>
    </StyledFeatured>
  );
}

export default Featured;
