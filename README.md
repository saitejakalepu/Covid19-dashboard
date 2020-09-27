This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Covid19 Dashboard
This is a covid dashboard application which fetches the data from [disease.sh](https://disease.sh/docs/) and display in the 3 different views say Map view , Table view and chart view.

## Contents

### `Covid Logo`

Clicking on the Covid Logo refreshes the page.

### `Search Bar`

Helps in displaying the specific country data.
Search List contains both Country Flag and Country Name.
Search functionality is performed either by entering the country name in search bar or by simply clicking on the country name from the list.

### `Social Media Icons`

These Social Media Icons helps to share the React-App to their Social media accounts.

### `Country Info panel`

Whenever a country is selected the country flag and country name is displayed in Info panel.

### `Info Card`
Info Card represents new confirmed/recovered/death cases , last updated date , total number of confirmed/recovered/death cases.

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
Default :
1.Data is represented in the form of Line/pie/bar chart in Chart view view.<br />
2.Line Graph fetches the time series date of last 210 days and plots the graph which displays the new cases added on timely basis<br/>
3.Line graph of global data is displayed when no country is selected.<br />
4.Infected data is set as default data in the Chart and represented with red colour Line graph.<br />
5.Whenever Recovered Info box is selected recovered data is represented in the Chart with green colour Line Graph.<br />
6.Whenever deaths Info box is selected deaths data is represented in the Chart with red colour Line Graph.<br />

Country Selected :
1.Line graph of Country data is displayed when a country is selected.<br />
2.Infected data is set as default data in the Chart and represented with red colour Line graph.<br />
3.Whenever Recovered Info box is selected recovered data is represented in the Chart with green colour Line Graph.<br />
4.Whenever deaths Info box is selected deaths data is represented in the Chart with red colour Line Graph.<br />
5.Bar and Pie chart fetches the total data of infected , recovered and deaths of selected country and presents them in the form of bar and pie chart.<br />



Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
