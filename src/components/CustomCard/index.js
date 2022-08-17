import React from "react";
import StateNotice from "../StateNotice";
import ShowDeviceDetails from "../ShowDeviceDetails";

const CustomCard = (props) => {
  return (
    <div className="card">
      <div><b>{ props.type }</b></div>
      <div>{ props.name }</div>
      <StateNotice {...props} />
      <ShowDeviceDetails {...props} />
    </div>
  );
};

export default CustomCard;
