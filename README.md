## Covid19 Dashboard 
This is a covid dashboard application which fetches the data from [disease.sh](https://disease.sh/docs/) and display in the 4 different views say Card view , Map view , Table view and Chart view.

## Application hosted at 
https://saitejakalepu.github.io/Covid19-dashboard/

<img src="Capture_covid_dashboard.JPG" alt="covid dashboard screenshot" height="80%" width="80%" />

## Contents

### `Covid Logo`

<li>Clicking on the Covid Logo refreshes the page.</li>


### `Search Bar`

<li>Helps in displaying the specific country data.</li>
<li>Search List contains both Country Flag and Country Name.</li>
<li>Search functionality is performed either by entering the country name in search bar or by simply clicking on the country name from the list.</li>



### `Social Media Icons`
<li>These Social Media Icons helps to share the React-App to their Social media accounts.</li>

### `Country Info panel`

<li>Whenever a country is selected the country flag and country name is displayed in Info panel.</li>

### `Info Card`
<li>Info Card represents new infected/recovered/death cases , last updated date , total number of infected/recovered/death cases.</li>
<li>Numeral is used to convert higher values in easy readable format.</li>
<li>new Date(date).toDateString() is used to convert updatedAt date to Day Month Date Year format.</li>

### `View Selector`

### `Map View`
<li>Map view is set as default fot the react-app.</li>
<li>Data is represented in the form of circle in map view.i.e Larger the circle , higher the cases.</li>
<li>Infected data is set as default data in map view and represented with red colour circle.</li>
<li>When a country is selected from the search bar , the map is zoomed to speicifc country.</li>
<li>Whenever Recovered Info box is selected recovered data is represented in map with green colour circle.</li>
<li>Whenever deaths Info box is selected deaths data is represented in map with light orange colour circle.</li>
<li>Whenever a mouse is hovered on a specific country ,the country data is displayed.</li>

### `Table View`

<li>Data is represented in the form of table in table view.</li>
<li>Data is sorted from high to low cases in the table.</li>
<li>When no country is selected table view shows both global data and data of all countries.</li>
<li>When a country is selected table view shows the data of only selected country.</li>

### `Chart View`

<li>Data is represented in the form of Line/pie/bar chart in Chart View.</li>
<li>Line Graph fetches the time series date of last 210 days and plots the graph which displays the new cases added on timely basis.</li>
<li>Line graph of global time series data is displayed when no country is selected.</li>
<li>Line graph of Country time series data is displayed when a specific country is selected.</li>
<li>Infected data is set as default data in the Chart and represented with red colour Line graph.</li>
<li>Whenever Recovered Info box is selected recovered data is represented in the Chart with green colour Line Graph.</li>
<li>Whenever deaths Info box is selected deaths data is represented in the Chart with red colour Line Graph.</li>
<li>Bar and Pie chart fetches the total data of infected , recovered and deaths of selected country and presents them in the form of bar and pie chart.</li>

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


