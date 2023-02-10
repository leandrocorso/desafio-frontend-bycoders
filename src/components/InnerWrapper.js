import { PropTypes } from "prop-types";
import styled from "styled-components";

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
