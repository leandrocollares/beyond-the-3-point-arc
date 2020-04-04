import React, { useState } from 'react';
import Scatterplot from './components/Scatterplot';
import SeasonSlider from './components/SeasonSlider';
import data from './data/fieldGoalsPerTeam';

const App = () => {
  const [selectedSeason, setSelectedSeason] = useState(2019);

  return (
    <div className="app">
      <header>
        <h1>Beyond the 3-point arc</h1>
      </header>
      <p>
        There has been a change in the field goal (FG) selection in the{' '}
        <a
          href="https://www.nba.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Basketball Association (NBA)
        </a>
        . The shift towards
        <a
          href="https://www.sportslingo.com/sports-glossary/t/three-point-field-goal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          3-point field goals{' '}
        </a>
        is gradual yet consistent. In the 1999-2000 regular season, 3-point FGs
        accounted for less than 22% of a team&apos;s points. In the last regular
        season, at least 26% of the points scored by any team resulted from
        3-pointers.
      </p>
      <p>
        The interactive visualization shows the percentages of points scored by
        NBA teams via 3-point and{' '}
        <a
          href="https://www.sportslingo.com/sports-glossary/m/mid-range-jump-shot/"
          target="_blank"
          rel="noopener noreferrer"
        >
          mid-range FGs{' '}
        </a>
        during regular seasons. Hovering over a circumference causes a tooltip
        containing said percentages to be shown. By using the season slider, it
        is possible to visualize the shot selection variation between 1999-2000
        and 2018-2019 regular seasons.
      </p>
      <p />
      <Scatterplot data={data} selectedSeason={selectedSeason} />
      <SeasonSlider
        minValue={2000}
        maxValue={2019}
        onSetSeason={setSelectedSeason}
        selectedSeason={selectedSeason}
      />
      <footer>
        <p>
          Source:{' '}
          <a
            href="https://stats.nba.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NBA
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
