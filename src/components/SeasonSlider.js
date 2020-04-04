import React from 'react';
import PropTypes from 'prop-types';

const SeasonSlider = ({ minValue, maxValue, onSetSeason, selectedSeason }) => {
  const inputWidth = 400;
  const season = `${selectedSeason - 1} - ${selectedSeason}`;
  const leftValue = `${minValue - 1} - ${minValue}`;
  const rightValue = `${maxValue - 1} - ${maxValue}`;

  return (
    <div className="slider">
      <div className="slider__label" style={{ center: inputWidth / 2 }}>
        <span className="slider__label__value">{season}</span>
      </div>

      <input
        type="range"
        value={selectedSeason}
        min={minValue}
        max={maxValue}
        onChange={(event) => onSetSeason(Number(event.target.value))}
      />
      <div className="slider__minmaxValues">
        <span>{leftValue}</span>
        <span>{rightValue}</span>
      </div>
    </div>
  );
};

SeasonSlider.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onSetSeason: PropTypes.func,
  selectedSeason: PropTypes.number,
};

export default SeasonSlider;
