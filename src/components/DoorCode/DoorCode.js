import React from 'react';
import PropTypes from 'prop-types';
import './DoorCode.css';

const DoorCode = ({ code }) => (
  <div className="door-code">

    <div className="series code-part">
      <span>{code.series}</span>
    </div>

    <div className="design code-part">
      <span>{code.designFront}</span>
      <span>{code.designRear}</span>
    </div>

    <div className="pen code-part">
      <span>{code.lockType}</span>
      <span>{code.penType}</span>
    </div>

    <span>(</span>

    <div className="materialFront code-part">
      <span>{code.materialFront.linen}</span>.
      <span>{code.materialFront.trim}</span>.
      <span>{code.materialFront.overlays}</span>.
      <span>{code.materialFront.glass}</span>
    </div>

    <span> / </span>

    <div className="materialRear code-part">
      <span>{code.materialRear.linen}</span>.
      <span>{code.materialRear.trim}</span>.
      <span>{code.materialRear.overlays}</span>.
      <span>{code.materialRear.glass}</span>
    </div>

    <span> - </span>

    <div className="box code-part">
      <span>{code.box.material}</span>
      <span>{code.box.instaltionType}</span>
    </div>

    <div className="size code-part">
      <span>{code.size.height}</span>
      <span>{code.size.width}</span>
    </div>

    <span>)</span>

  </div>
);

// DoorCode.propTypes = {
//   code: PropTypes.string.isRequired
// };

export default DoorCode;