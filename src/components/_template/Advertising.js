import styled from "styled-components";

const StyledAdvertising = styled.div`
  grid-area: advertising;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

function Advertising() {
  return (
    <StyledAdvertising className="advertising">
      <div className="advertising__media" />
      <div className="advertising__description" />
    </StyledAdvertising>
  );
}

export default Advertising;
