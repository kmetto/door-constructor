import PropTypes from 'prop-types';

export const propTypes = {
  callbacks: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  values: PropTypes.object,
  activity: PropTypes.bool,
  onFocus: PropTypes.func,
};

export const defaultProps = {
  values: {},
  onFocus: () => {},
};
