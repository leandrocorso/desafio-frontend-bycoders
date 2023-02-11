import PropTypes from "prop-types";

const videoPropTypes = {
  videoId: PropTypes.string.isRequired,
  snippet: PropTypes.shape({
    title: PropTypes.string,
    channelTitle: PropTypes.string,
    thumbnails: PropTypes.shape({
      default: PropTypes.shape({
        url: PropTypes.string,
        with: PropTypes.number,
        height: PropTypes.number,
      }),
    }),
  }),
};

export default videoPropTypes;
