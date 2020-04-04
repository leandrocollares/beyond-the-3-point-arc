import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({
  name,
  threePointers,
  midRange,
  xScale,
  yScale,
  marginLeft,
  marginTop,
}) => {
  const x = xScale(threePointers) + 2 * marginLeft;

  const y = yScale(midRange) + marginTop;

  const styles = {
    transform:
      'translate(' + `calc(-50% + ${x}px),` + `calc(-100% + ${y}px)` + ')',
  };

  const threePointerPercentage = `3-point FGs: ${threePointers}%`;
  const midRangePercentage = `Mid-range FGs: ${midRange}%`;

  return (
    <div className="tooltip" style={styles}>
      <div className="tooltip__teamName">{name}</div>
      <div>{threePointerPercentage}</div>
      <div>{midRangePercentage}</div>
    </div>
  );
};

Tooltip.propTypes = {
  name: PropTypes.string,
  threePointers: PropTypes.string,
  midRange: PropTypes.string,
  xScale: PropTypes.func,
  yScale: PropTypes.func,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
};

export default Tooltip;
