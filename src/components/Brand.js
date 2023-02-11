import PropTypes from "prop-types";

import { ReactComponent as Logo } from "../assets/logo.svg";

function Brand({ className }) {
  return (
    <div className={className}>
      <div className="logo">
        <Logo />
      </div>
    </div>
  );
}

Brand.propTypes = {
  className: PropTypes.string,
};

Brand.defaultProps = {
  className: "brand",
};

export default Brand;
