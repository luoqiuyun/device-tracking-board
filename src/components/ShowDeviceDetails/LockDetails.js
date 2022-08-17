import React from "react";

const LockDetails = (props) => {
  return (
    <>
      <div>{props.name}</div>
      <div>{props.type}</div>
      <div>Code: {props.codes.join(',')}</div>
      <div>Locked: {props.locked ? "true":"false"}</div><br />
      <button onClick={props.hide}>Close</button>
    </>
)}

export default LockDetails;
