import React from "react";

const ThermoDetails = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.type}</div>
      <div>temp: {props.temp}</div>
      <div>mode: {props.mode}</div><br />
      <button onClick={props.hide}>Close</button>
    </>
)}

export default ThermoDetails;
