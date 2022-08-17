import React from "react";

const DimmerDetails = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.type}</div>
      <div>Level: {props.level}</div><br />
      <button onClick={props.hide}>Close</button>
    </>
)}

export default DimmerDetails;
