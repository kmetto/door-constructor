import React from 'react';
import PropTypes from 'prop-types';

import './DoorCode.css';
import doorSeries from '../../data/door-series';
import blocks from '../../data/blocks';

function getSeriesName(id, allSeries) {
  const seriesName = allSeries.find(s => s.value === id);
  return seriesName ? seriesName.text : '-';
}

function addHightlightClass(blockName, currentActive, otherClasses = []) {
  let defaultClasess = otherClasses.join(' ');
  if (blockName === currentActive) defaultClasess += ' hightlight';
  return defaultClasess;
}

const DoorCode = ({ code, onHover }) => (
  <div className="door-code">
    <div
      className={addHightlightClass(blocks.BLOCK_SERIES, code.activeBlock, [
        'series',
        'code-part',
      ])}
      onMouseEnter={() => onHover(blocks.BLOCK_SERIES)}
    >
      <span>{getSeriesName(code.series, doorSeries)}</span>
    </div>

    <div className="design code-part">
      <span>{code.designOutside || '-'}</span>
      <span>{code.designInside || '-'}</span>
    </div>

    <div
      className={addHightlightClass(blocks.BLOCK_FITTINGS, code.activeBlock, [
        'fittings',
        'code-part',
      ])}
      onMouseEnter={() => onHover(blocks.BLOCK_FITTINGS)}
    >
      <span>{code.fittings.outsidePenType || '-'}</span>
      <span>{code.fittings.insidePenType || '-'}</span>
      <span>{code.fittings.lockType || '-'}</span>
    </div>

    <span>(</span>

    <div
      className={addHightlightClass(blocks.BLOCK_MATERIAL_OUTSIDE, code.activeBlock, [
        'materialOutside',
        'code-part',
      ])}
      onMouseEnter={() => onHover(blocks.BLOCK_MATERIAL_OUTSIDE)}
    >
      <span>{code.materialOutside.linen || '-'}</span>.
      <span>{code.materialOutside.trim || '-'}</span>.
      <span>{code.materialOutside.overlays || '-'}</span>.
      <span>{code.materialOutside.glass || '-'}</span>
    </div>

    <span> / </span>

    <div
      className={addHightlightClass(blocks.BLOCK_MATERIAL_INSIDE, code.activeBlock, [
        'materialInside',
        'code-part',
      ])}
      onMouseEnter={() => onHover(blocks.BLOCK_MATERIAL_INSIDE)}
    >
      <span>{code.materialInside.linen || '-'}</span>.
      <span>{code.materialInside.trim || '-'}</span>.
      <span>{code.materialInside.overlays || '-'}</span>.
      <span>{code.materialInside.glass || '-'}</span>
    </div>

    <span> - </span>

    <div
      className={addHightlightClass(blocks.BLOCK_BOX, code.activeBlock, [
        'box',
        'code-part',
      ])}
      onMouseEnter={() => onHover(blocks.BLOCK_BOX)}
    >
      <span>{code.box.material || '-'}</span>
      <span>{code.box.instaltionType || '-'}</span>
    </div>

    <div
      className={addHightlightClass(blocks.BLOCK_SIZES, code.activeBlock, [
        'size',
        'code-part',
      ])}
      onMouseEnter={() => onHover(blocks.BLOCK_SIZES)}
    >
      <span>{Math.round(code.size.height * 0.01) || '-'}</span>
      <span>{Math.round(code.size.width * 0.01) || '-'}</span>
    </div>

    <span>)</span>
  </div>
);

DoorCode.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  code: PropTypes.object.isRequired,
};

export default DoorCode;
