import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, active,total ,isRed,date, ...props}) {
  return (
    <Card  item xs={12} md={3} onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${
      isRed && "infoBox--red"
    }`}>
    <CardContent >
      <Typography  className="infoBox__title" color="textSecondary" gutterBottom>
        {title}
      </Typography>
      <Typography className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`} variant="h5" component="h1">
       {cases}
      </Typography>
      <Typography className="infoBox__date" variant="body1" component="p">
       Last Updated : {date} 
      </Typography>
      <Typography className="infoBox__total" variant="body1" component="p">
      {total} Total Cases
      </Typography>
    </CardContent>
  </Card>
  );
}


export default InfoBox;