import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const StyledBrand = styled.div`
  display: flex;
  width: 300px;
  grid-area: brand;
  align-items: center;

  .logo {
    width: 190px;
  }
`;

function Brand() {
  return (
    <StyledBrand>
      <div className="logo">
        <Logo />
      </div>
    </StyledBrand>
  );
}

export default Brand;
