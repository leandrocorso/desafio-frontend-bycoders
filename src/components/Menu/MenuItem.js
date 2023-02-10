import PropTypes from "prop-types";
import styled from "styled-components";

const StyledMenuItem = styled.li`
  a {
    color: ${({ theme }) => theme.elements.links.color};
    text-decoration: ${({ theme }) => theme.elements.links.decoration};
  }

  &.menu__item--active a {
    color: ${({ theme }) => theme.elements.links.active.color};
    text-decoration: ${({ theme }) => theme.elements.links.active.decoration};
  }
`;

function MenuItem({ href, children, isActive }) {
  const activedItem = isActive === true ? "--active" : "";

  return (
    <StyledMenuItem className={`menu__item${activedItem}`}>
      <a href={href}>{children}</a>
    </StyledMenuItem>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

MenuItem.defaultProps = {
  isActive: false,
};

export default MenuItem;
