import React from "react";

const SwitchDetails = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.type}</div>
      <div>{props.state}</div><br />
      <button onClick={props.hide}>Close</button>
    </>
)}

export default SwitchDetails;
