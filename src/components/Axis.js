import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const Axis = ({
  orientation,
  scale,
  xTransform,
  yTransform,
  className,
  label,
}) => {
  const axisRef = useRef(null);

  useEffect(() => {
    d3.select(axisRef.current).call(d3[`axis${orientation}`](scale));
  }, [scale, orientation]);

  const labelPos = () => {
    switch (orientation) {
      case 'Bottom':
        return { x: scale.range()[1] / 2, y: 50 };
      case 'Left':
        return { x: 45, y: -25 };
      default:
        return null;
    }
  };

  return (
    <g
      ref={axisRef}
      transform={`translate(${xTransform}, ${yTransform})`}
      className={className}
    >
      <text {...labelPos()} className="scatterplot__axisLabel">
        {label}
      </text>
    </g>
  );
};

Axis.propTypes = {
  orientation: PropTypes.oneOf(['Top', 'Right', 'Bottom', 'Left']),
  scale: PropTypes.func,
  xTransform: PropTypes.number,
  yTransform: PropTypes.number,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Axis;
