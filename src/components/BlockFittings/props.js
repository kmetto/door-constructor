import PropTypes from 'prop-types';

export const propTypes = {
  callbacks: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  values: PropTypes.object,
};

export const defaultProps = {
  values: {},
};
