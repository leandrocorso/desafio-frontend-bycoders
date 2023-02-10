import styled from "styled-components";

import Anonymous from "./Anonymous";
import Logged from "./Logged";

const isLogged = false;

const StyledAuthFeedback = styled.div`
  grid-area: auth-status;
  display: flex;
  justify-content: flex-end;

  a {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

function AuthFeedback() {
  return (
    <StyledAuthFeedback>
      {isLogged ? <Logged /> : <Anonymous />}
    </StyledAuthFeedback>
  );
}

export default AuthFeedback;
