import React from 'react';
import './Table.css';

function Table({countries, info}) {
    console.log(countries);
    console.log(info.country);

    if(!info.country)
    {
        return (
            <div className="table">    
            <thead>
                <tr>
                    
                    <th className="sticky-column">Name</th>
                    <th className="sticky-column">Total Cases</th>
                    <th className="sticky-column">Active Cases</th>
                    <th className="sticky-column">Critical Cases</th>
                    <th className="sticky-column">Recovered Cases</th>
                    <th className="sticky-column">Deaths</th>
                    <th className="sticky-column">Tests Performed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {!info.country &&(
                        <td>
                        <div className="div__flag">
                        <img src="globe_img.jpg"  alt="" width="50px" height="40px"/>
                            <div  style={ {marginTop:10}}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Global</div>
                        </div>
                        </td>
                    )}
    
                    {info.country &&(
                        <td >
                        <div className="div__flag">
                        <div 
                    style={{ backgroundImage: `url(${info.countryInfo.flag})` ,width:60,
                    height: 40, backgroundSize :'cover', borderRadius:5 ,marginTop:5}}>
                    </div>
                    <div  style={ {marginTop:10}}>
                    &nbsp;&nbsp;&nbsp;{info.country}
                    </div>
                        </div>
                    
                    </td>
                    )}
                    <td>{info.cases}</td>
                    <td>{info.active}</td>
                    <td>{info.critical}</td>
                    <td>{info.recovered}</td>
                    <td>{info.deaths}</td>
                    <td>{info.tests}</td>
                </tr>
    
                {countries.map( data=>(
                    <tr> 
                        <td>
                           <div className="div__flag">
                            <div 
                        style={{ backgroundImage: `url(${data.countryInfo.flag})` ,width:60,
                        height: 40, backgroundSize :'cover', borderRadius:5 ,marginTop:5}}>
                        </div>
                        <div  style={ {marginTop:10}}>
                        &nbsp;&nbsp;&nbsp;{data.country}
                        </div>
                            </div>
                        
                        </td>
                        <td>{data.cases}</td>
                        <td>{data.active}</td>
                        <td>{data.critical}</td>
                        <td>{data.recovered}</td>
                        <td>{data.deaths}</td>
                        <td>{data.tests}</td>
                    </tr>
                ))}
            </tbody>           
            </div>

        )
    }

    else if(info.country)
    {

        return (
            <div className="table">    
            <thead>
                <tr>
                    
                    <th className="sticky-column">Name</th>
                    <th className="sticky-column">Total Cases</th>
                    <th className="sticky-column">Active Cases</th>
                    <th className="sticky-column">Critical Cases</th>
                    <th className="sticky-column">Recovered Cases</th>
                    <th className="sticky-column">Deaths</th>
                    <th className="sticky-column">Tests Performed</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                        <td >
                        <div className="div__flag">
                        <div 
                    style={{ backgroundImage: `url(${info.countryInfo.flag})` ,width:60,
                    height: 40, backgroundSize :'cover', borderRadius:5 ,marginTop:5}}>
                    </div>
                    <div  style={ {marginTop:10}}>
                    &nbsp;&nbsp;&nbsp;{info.country}
                    </div>
                        </div>
                    
                    </td>
                    
                    <td>{info.cases}</td>
                    <td>{info.active}</td>
                    <td>{info.critical}</td>
                    <td>{info.recovered}</td>
                    <td>{info.deaths}</td>
                    <td>{info.tests}</td>
                 
                </tr>
    
                
            </tbody>           
            </div>

        )
    }


    
    
}

export default Table;
