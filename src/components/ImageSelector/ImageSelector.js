import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ImageSelector = ({
  options, clickCallback, label,
}) => (
  <div className="form-unit">
    <Button
      options={options}
      onClick={(e, component) => {
        clickCallback(component.value);
      }}
      color="violet"
    >{label}
    </Button>
  </div>
);

ImageSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  label: PropTypes.string,
  clickCallback: PropTypes.func.isRequired,
};

ImageSelector.defaultProps = {
  label: '',
};

export default ImageSelector;
