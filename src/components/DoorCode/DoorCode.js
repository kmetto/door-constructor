import React from 'react';
import PropTypes from 'prop-types'
const DoorCode = ({ code }) => (
  <div> {code} </div>
)

DoorCode.propTypes = {
  code: PropTypes.string.isRequired
}

export default DoorCode