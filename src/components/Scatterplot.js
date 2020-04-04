import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import Axis from './Axis';
import Tooltip from './Tooltip';
import { useChartDimensions } from '../hooks/useChartDimensions';

const chartSettings = {
  marginTop: 50,
  marginRight: 25,
  marginBottom: 75,
  marginLeft: 25,
};

const Scatterplot = ({ data, selectedSeason }) => {
  const [ref, dms] = useChartDimensions(chartSettings);
  dms.height = dms.width;
  dms.boundedHeight = dms.height - dms.marginTop - dms.marginBottom;

  const [hoveredCircle, setHoveredCircle] = useState(null);

  const xScale = useMemo(
    () =>
      d3.scaleLinear().domain([5, 45]).rangeRound([0, dms.boundedWidth]).nice(),
    [dms.boundedWidth],
  );

  const yScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([0, 40])
        .rangeRound([dms.boundedHeight, 0])
        .nice(),
    [dms.boundedHeight],
  );

  return (
    <div className="scatterplot" ref={ref}>
      <svg className="chart" width={dms.width} height={dms.height}>
        <g
          transform={`translate(${[dms.marginLeft, dms.marginTop].join(',')})`}
        >
          {data.map((team) =>
            team.midRange[selectedSeason] !== 'NA' ? (
              <circle
                className="scatterplot__circle"
                key={team.name}
                r={5}
                cy={yScale(team.midRange[selectedSeason])}
                cx={xScale(team.threePointers[selectedSeason])}
                onMouseEnter={() => {
                  setHoveredCircle(team);
                }}
                onMouseLeave={() => {
                  setHoveredCircle(null);
                }}
              />
            ) : null,
          )}
          <Axis
            orientation="Bottom"
            scale={xScale}
            xTransform={0}
            yTransform={dms.boundedHeight}
            className="scatterplot__axis"
            label="3-point field goals (%)"
          />
          <Axis
            orientation="Left"
            xTransform={0}
            yTransform={0}
            scale={yScale}
            className="scatterplot__axis"
            label="Mid-range field goals (%)"
          />
        </g>
      </svg>
      {hoveredCircle ? (
        <Tooltip
          name={hoveredCircle.name}
          threePointers={hoveredCircle.threePointers[selectedSeason]}
          midRange={hoveredCircle.midRange[selectedSeason]}
          xScale={xScale}
          yScale={yScale}
          marginLeft={dms.marginLeft}
          marginTop={dms.marginTop}
          selectedSeason={selectedSeason}
        />
      ) : null}
    </div>
  );
};

Scatterplot.propTypes = {
  data: PropTypes.array,
  selectedSeason: PropTypes.number,
};

export default Scatterplot;
