import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectVideos } from "../../redux/videoSlice";
import InnerWrapper from "../InnerWrapper";
import { VideoItem, VideoList, VideoPlayer } from "../Video";

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
  const videos = useSelector(selectVideos);

  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    if (videos?.data?.itemsByUse?.nextVideos) {
      setNextVideos(videos.data.itemsByUse.nextVideos);
    }
  }, [videos]);

  return (
    <StyledFeatured className="featured">
      <InnerWrapper>
        <h3>Featured</h3>

        <div className="featured__wrapper">
          <VideoPlayer />

          {nextVideos && (
            <VideoList>
              {nextVideos.map(({ id, etag, kind }) => (
                <VideoItem key={id} title={etag} thumb={kind} />
              ))}
            </VideoList>
          )}
        </div>
      </InnerWrapper>
    </StyledFeatured>
  );
}

export default Featured;
