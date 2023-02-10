import PropTypes from "prop-types";
import styled from "styled-components";

const StyledMenuWrapper = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    column-gap: ${({ theme }) => theme.spacement};
  }
`;

function MenuWrapper({ className, children }) {
  return (
    <StyledMenuWrapper className={className}>
      <ul>{children}</ul>
    </StyledMenuWrapper>
  );
}

MenuWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

MenuWrapper.defaultProps = {
  className: null,
};

export default MenuWrapper;
