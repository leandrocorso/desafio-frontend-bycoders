import PropTypes from "prop-types";

import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import Advertising from "./Advertising";
import Featured from "./Featured";
import Header from "./Header";
import MoreVideos from "./MoreVideos";
import StyledTemplate from "./styles";

function Template({ isLoading, error, children }) {
  return (
    <StyledTemplate>
      <Header />
      {isLoading && <Loader />}
      {error && <ErrorMessage msg={error} />}
      {!isLoading && !error && children}
    </StyledTemplate>
  );
}

Template.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Advertising, Featured, Header, MoreVideos };
export default Template;
