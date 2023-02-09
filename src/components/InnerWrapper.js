import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledInnerWrapper = styled.div`
  padding: ${({ theme }) => theme.spacement};
`;

function InnerWrapper({ children }) {
  return (
    <StyledInnerWrapper className="inner-wrapper">
      {children}
    </StyledInnerWrapper>
  );
}

InnerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InnerWrapper;
