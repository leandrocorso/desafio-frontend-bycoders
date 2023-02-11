import PropTypes from "prop-types";

function MenuItem({ href, children, className }) {
  return (
    <li className={className}>
      <a href={href}>{children}</a>
    </li>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default MenuItem;
