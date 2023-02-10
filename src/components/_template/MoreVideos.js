import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectVideos } from "../../redux/videoSlice";
import InnerWrapper from "../InnerWrapper";
import { VideoItem, VideoList } from "../Video";

const StyledMoreVideos = styled.div`
  grid-area: more-videos;
  background-color: ${({ theme: { colors } }) => colors.lightGray};

  .videos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacement};
  }
`;

function MoreVideos() {
  const videos = useSelector(selectVideos);

  const [moreVideos, setMoreVideos] = useState([]);

  useEffect(() => {
    if (videos?.data?.itemsByUse?.moreVideos) {
      setMoreVideos(videos.data.itemsByUse.moreVideos);
    }
  }, [videos]);

  return (
    <StyledMoreVideos className="more-videos">
      <InnerWrapper>
        <VideoList>
          {moreVideos.map(({ id, snippet }) => (
            <VideoItem key={id} id={id} snippet={snippet} />
          ))}
        </VideoList>
      </InnerWrapper>
    </StyledMoreVideos>
  );
}

export default MoreVideos;
