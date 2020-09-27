import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import InfoBox from "./Components/InfoBox/InfoBox";
import Table from './Components/Table/Table';
import {sortData ,FormatNum , checkInputValid} from './util';
import Graph from './Components/Graph/Graph';
import CountryGraph from './Components/Graph/CountryGraph';
import Chart from './Components/Graph/Chart';
import Map from './Components/Map/Map';
import "leaflet/dist/leaflet.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import numeral from "numeral";
import Tooltip from "@material-ui/core/Tooltip";
import Icons from './Components/Icons';
import { Icon } from '@material-ui/core';
import Globe_img from '../src/images/Globe_img.JPG';
import covid_logo from '../src/images/covid_logo.JPG';

function App() {

  const [country , setInputCountry] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState([34.80746, 20.4796]); //Latitude and longitude to set the map
  const [mapZoom, setMapZoom] = useState(2.4); // Zoom set to Map
  const [SelectorView, setSelectorView] = useState("map"); // Default selector state as map view
  const [infoView, setinfoView] = useState("display");
  const [chartView,setchartView] = useState("line");
  const [mapButtoncolour, setmapButton] = useState(true);
  const [tableButtoncolour, settableButton] = useState(false);
  const [graphButtoncolour, setgraphButton] = useState(false);
  const [date, setDate] = useState([]);
  
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);// Fetching Global data
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")//fetching country data
        .then((response) => response.json())
        .then((data) => {
          
          const countries = data.map((country) => ({
            name: country.country,
            value : country.countryInfo.iso2,
            flag: country.countryInfo.flag
          }));
          const sortedData=sortData(data) // sorting cases from High to Low as Table data
        
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
          
        });
    };
    getCountriesData();
  }, []);


  const OnCountryChange = async (event, value) => {
    const countryCode = value ? value : event.target.value
    setinfoView("countryDisplay");
    setchartView("bar/pie");
    
    let checkvalid= checkInputValid(countryCode, countries); // input field validation
   
    if(checkvalid===0)
    {
      alert("No country data found");
      refreshPage() ;
    }
    else{
    const url = `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        
        setInputCountry(countryCode);
        setCountryInfo(data);
        
        const lat = data.countryInfo.lat;
        const lng = data.countryInfo.long;
        setMapCenter([ 0,0 ]); // reseting latitude and longitude values 
        setMapZoom(4);
        if(lat && lng)
        {
          setMapCenter([ lat,lng ]);
          setMapZoom(4);
        }
        
      });   
    }
  }
  



  
// view selector classes for CSS Styling
  let map_class = mapButtoncolour ? "showBlue" : "showGrey";
  let table_class = tableButtoncolour ? "showBlue" : "showGrey";
  let graph_class = graphButtoncolour ? "showBlue" : "showGrey";


  // view selection buttons 
  const onClickChart = () => {
    setSelectorView("graph");
    setgraphButton(true);
    setmapButton(false);
    settableButton(false);
  }

  const onClickMap = () => {
    setSelectorView("map");
    setmapButton(true);
    setgraphButton(false);
    settableButton(false);

  }

  const onClickTable = () => {
    setSelectorView("table");
    settableButton(true);
    setgraphButton(false);
    setmapButton(false);

  }


  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/jhucsse")//fetching Last updated date
        .then((response) => response.json())
        .then((data) => {
          const myDate = data.slice(0,1).map((a) => ({
            value : a.updatedAt
          }));
          const x=myDate.map((country) => country.value)
          setDate(x);
        });
    };
    getCountriesData();
  }, []);

 
  return (
    <div className="app">
      <div className="app__header">
        
        <div className="app__logo">
        <Tooltip 
         title="Click here to refresh page"
         placement="right" 
         arrow  >
        <img src={covid_logo} onClick={refreshPage} alt=""/></Tooltip>
        </div>
        
        <div className="search__box">
        <Autocomplete className ="app_CountrySelector"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        //value={country.name}
        onChange={(event, value) => OnCountryChange(event,value.name)}
        options={countries.map((country) => country)}
        
        //noOptionsText={'No Options'}
        getOptionLabel={country => country.name}
        renderOption={country => {
          return (
          <Fragment>
            
              <Icon style={{ backgroundImage: `url(${country.flag})`, backgroundSize: "cover",
              width:50,height:35, borderRadius:5}} />
            &nbsp;&nbsp;&nbsp;&nbsp; {country.name}
             </Fragment>
      );
 
      }}
      filterSelectedOptions

        renderInput={(params) => (
          <Fragment>
            <TextField
            {...params}
            label="Search by Country"
            margin="none"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
          </Fragment>
          
        )}
        />
        </div>

        <div className="app__icons"><Icons/></div> {/* Social Media Icons*/}
      </div> 


      {/* end oh header*/}

      <div className="app__info" >

      {infoView==="display"&& (
        <div className="country__info"><p>Coronavirus Disease (COVID-19) Dashboard</p></div>
      )}

      {infoView==="countryDisplay"&& countryInfo.countryInfo && countryInfo.countryInfo.flag && (
      <div className="country__info" >
        <img src={Globe_img}  alt="" width="50px" height="40px"/>&nbsp;&nbsp;Global &nbsp;&nbsp; >  &nbsp;&nbsp;
        <div className="info-flag"
        style={{ backgroundImage: `url(${countryInfo.countryInfo.flag})` ,width:50,
        height:35, borderRadius:5}}
     ></div>
        &nbsp;&nbsp;{countryInfo.country}</div>
      )}


        <div className="view__selector">
        <button className={map_class} onClick = {onClickMap}>Map view</button>
        <button className={table_class} onClick = {onClickTable}>Table view</button>
        <button className={graph_class} onClick = {onClickChart}>Chart view</button>
        </div>

      </div> 

      {/* end oh app info*/}

      <div className="app__body">
        <div className="app__stats">
        <InfoBox 
        onClick={(e) => setCasesType("cases")}  
        isRed
        active={casesType === "cases"} 
        title="Infected" 
        cases={FormatNum(countryInfo.todayCases)} 
        total={numeral(countryInfo.cases).format("0.0a")}
        date={date}
        
        />

        <InfoBox 
        onClick={(e) => setCasesType("recovered")} 
        active={casesType === "recovered"}
        title="Recovered" 
        cases={FormatNum(countryInfo.todayRecovered)} 
        total={numeral(countryInfo.recovered).format("0.0a")}
        date={date}
      
        
        />
        <InfoBox 
        onClick={(e) => setCasesType("deaths")} 
        isRed
        active={casesType === "deaths"} 
        title="Deaths" 
        cases={FormatNum(countryInfo.todayDeaths)} 
        total={numeral(countryInfo.deaths).format("0.0a")}
         date={date}
        
        />
        </div>

      {SelectorView==="map" && (
        <div className="app__map">
         <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
        </div>
      )}

      {SelectorView==="table"&& (
        <div className="app__table">
        <Table countries={tableData}  info={countryInfo}/>
        </div>
      )}
    
      {SelectorView==="graph" && (
        <div>
          
          {chartView==="bar/pie" && (
          <div className="both__display">
            <div className="app__bar">
            <CountryGraph casesType={casesType} country={country}/>  
            </div>
            <div className="app__bar">
            <Chart info={countryInfo}/>
            </div>
         </div>
          )}

          {chartView==="line" &&(
            <div className="app__chart">
            <Graph casesType={casesType}/>    
            </div>
          )}

        </div>
      )}

      </div> {/* end oh app body*/}
  
  {/* end oh App*/}
    </div> 
  );
}


function refreshPage() {
  window.location.reload(false); //Refresh the page
}


export default App;
