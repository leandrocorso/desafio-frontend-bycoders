import styled from "styled-components";

const StyledVideoItem = styled.li`
  gap: ${({ theme }) => theme.spacement};

  a.${({ className }) => className}__link {
    display: grid;
    grid-template-columns: 110px auto;
    gap: calc(${({ theme }) => theme.spacement} / 2);
  }

  div.${({ className }) => className}__thumb {
    display: flex;
    align-items: center;
    height: 61px;
    overflow: hidden;
  }

  img.${({ className }) => className}__thumb__image {
    width: 100%;
  }
`;

export default StyledVideoItem;
