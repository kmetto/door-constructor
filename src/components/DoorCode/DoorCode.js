import React from 'react';
import PropTypes from 'prop-types';

import './DoorCode.css';
import doorSeries from '../../data/door-series';

function getSeriesName(id, allSeries) {
  const seriesName = allSeries.find(s => s.value === id);
  return seriesName ? seriesName.text : '-';
}

const DoorCode = ({ code }) => (
  <div className="door-code">
    <div className="series code-part">
      <span>{getSeriesName(code.series, doorSeries)}</span>
    </div>

    <div className="design code-part">
      <span>{code.designOutside || '-'}</span>
      <span>{code.designInside || '-'}</span>
    </div>

    <div className="fittings code-part">
      <span>{code.fittings.outsidePenType || '-'}</span>
      <span>{code.fittings.insidePenType || '-'}</span>
      <span>{code.fittings.lockType || '-'}</span>
    </div>

    <span>(</span>

    <div className="materialOutside code-part">
      <span>{code.materialOutside.linen || '-'}</span>.
      <span>{code.materialOutside.trim || '-'}</span>.
      <span>{code.materialOutside.overlays || '-'}</span>.
      <span>{code.materialOutside.glass || '-'}</span>
    </div>

    <span> / </span>

    <div className="materialInside code-part">
      <span>{code.materialInside.linen || '-'}</span>.
      <span>{code.materialInside.trim || '-'}</span>.
      <span>{code.materialInside.overlays || '-'}</span>.
      <span>{code.materialInside.glass || '-'}</span>
    </div>

    <span> - </span>

    <div className="box code-part">
      <span>{code.box.material || '-'}</span>
      <span>{code.box.instaltionType || '-'}</span>
    </div>

    <div className="size code-part">
      <span>{code.size.height || '-'}</span>
      <span>{code.size.width || '-'}</span>
    </div>

    <span>)</span>

  </div>
);

DoorCode.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  code: PropTypes.object.isRequired,
};

export default DoorCode;
