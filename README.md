## Covid19 Dashboard 
This is a covid dashboard application which fetches the data from [disease.sh](https://disease.sh/docs/) and display in the 4 different views say Card view , Map view , Table view and Chart view.

## Application Published at 
https://saitejakalepu.github.io/Covid19-dashboard/

## Contents

### `Covid Logo`

Clicking on the Covid Logo refreshes the page.

### `Search Bar`

Helps in displaying the specific country data.<br />
Search List contains both Country Flag and Country Name.<br />
Search functionality is performed either by entering the country name in search bar or by simply clicking on the country name from the list.<br />

### `Social Media Icons`

These Social Media Icons helps to share the React-App to their Social media accounts.

### `Country Info panel`

Whenever a country is selected the country flag and country name is displayed in Info panel.

### `Info Card`
Info Card represents new infected/recovered/death cases , last updated date , total number of infected/recovered/death cases.<br />
Numeral is used to convert higher values in easy readable format.<br/>
new Date(date).toDateString() is used to convert updatedAt date to Day Month Date Year format.<br/>

### `View Selector`

### `Map View`

1.Map view is set as default fot the react-app.<br />
2.Data is represented in the form of circle in map view.i.e Larger the circle , higher the cases.<br />
3.Infected data is set as default data in map view and represented with red colour circle.<br />
4.Whenever Recovered Info box is selected recovered data is represented in map with green colour circle.<br />
5.Whenever deaths Info box is selected deaths data is represented in map with light orange colour circle.<br />
6.When a country is selected from the search bar , the map is zoomed to speicifc country.<br />
7.Whenever a mouse is hovered on a specific country ,the country data is displayed.<br />


### `Table View`

1.Data is represented in the form of table in table view.<br />
2.Data is sorted from high to low cases in the table.<br />
3.When no country is selected table view shows both global data and data of all countries.<br />
4.When a country is selected table view shows the data of only selected country.<br />


### `Chart View`

1.Data is represented in the form of Line/pie/bar chart in Chart View.<br />
2.Line Graph fetches the time series date of last 210 days and plots the graph which displays the new cases added on timely basis<br/>
3.Line graph of global time series data is displayed when no country is selected.<br />
4.Line graph of Country time series data is displayed when a specific country is selected.<br />
5.Infected data is set as default data in the Chart and represented with red colour Line graph.<br />
6.Whenever Recovered Info box is selected recovered data is represented in the Chart with green colour Line Graph.<br />
7.Whenever deaths Info box is selected deaths data is represented in the Chart with red colour Line Graph.<br />
8.Bar and Pie chart fetches the total data of infected , recovered and deaths of selected country and presents them in the form of bar and pie chart.<br />


## Dependencies


### `Material UI `
For Card, CardContent, Typography , Tooltip & Icon  <br />

with npm<br />
npm install @material-ui/core
npm install @material-ui/lab/Autocomplete // for search bar

with yarn<br />
yarn add @material-ui/core


### `React Leaflet`
For displaying MAP

Using npm or Yarn<br />
npm install react-leaflet # npm <br />

yarn add react-leaflet # Yarn<br />
React, ReactDOM and Leaflet are peer dependencies, if you haven't already installed them you can use:<br />

npm install leaflet react react-dom # npm <br />
yarn add leaflet react react-dom # YarnInstallation via NPM<br />

### `React Chartjs2`
For Charts

npm install --save react-chartjs-2 chart.js<br />
Installation via YARN<br />
yarn add react-chartjs-2 chart.js<br />


### `React Share`
For Social Media Icons<br />
npm install react-share --save<br />


