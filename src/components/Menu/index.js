import PropTypes from "prop-types";

import MenuItem from "./MenuItem";

function Menu({ className, items }) {
  const setItemClassName = (isActive) => {
    const itemActive = isActive ? "--active" : "";
    return `${className}__item${itemActive}`;
  };

  return (
    <ul className={className}>
      {items.map(({ id, label, href, isActive }) => (
        <MenuItem key={id} href={href} className={setItemClassName(isActive)}>
          {label}
        </MenuItem>
      ))}
    </ul>
  );
}

Menu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      href: PropTypes.string,
      isActive: PropTypes.bool,
    })
  ).isRequired,
};

Menu.defaultProps = {
  className: null,
};

export default Menu;
