import styled from "styled-components";
import AuthStatus from "../AuthStatus";
import Brand from "../Brand";
import SearchForm from "../SearchForm";
import Menu from "../Menu";

const StyledHeader = styled.div`
  grid-area: header;
  display: grid;
  height: 100px;
  grid-template-areas:
    "brand search-form auth-status"
    "brand menu menu";
  grid-template-columns: 2fr 5fr 3fr;
`;

function Header() {
  return (
    <StyledHeader>
      <Brand />
      <SearchForm />
      <AuthStatus />
      <Menu />
    </StyledHeader>
  );
}

export default Header;
