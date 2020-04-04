# Beyond the 3-point arc

A responsive, interactive scatter plot that displays the percentages of points scored by NBA teams via 3-point and mid-range field goals. The visualization offers the following interaction possibilities:

* Moving the slider allows users to see the variation of the said percentages between 1999-2000 and 2018-2019 seasons.

* Hovering over a circumference causes a tooltip containing the percentages of 3-point and mid-range field goals scored by the team to be shown.

The visualization was implemented with [React](https://reactjs.org/) and [D3](https://d3js.org/). React renders visualization components, whereas D3 handles data and axis calculations. Thanks to React Hooks, only functional components were employed. 

The [ResizeObserver API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) and [Amelia Wattenberger](https://wattenberger.com/)'s useChartDimensions hook were used to make the
scatter plot responsive. Please refer to [React + D3.js](https://wattenberger.com/blog/react-and-d3) for further information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Getting started

* Clone or download the repository 

* Navigate to the project directory: ```cd beyond-the-3-point-arc```

* Install dependencies: ```npm install```

* Run the app in development mode: ```npm start```

Please refer to the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for further information.

## Data source

[NBA](https://stats.nba.com/)