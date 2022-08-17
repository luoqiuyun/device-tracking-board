import React from "react";

const StateNotice = (props) => {
  const dragged = props.stateChange[0];
  const stateChanged = !!dragged && dragged === props.id;
  const timeDragged = () => {
    const date = new Date();
    return date.toLocaleString();
  };
  const comments = () => {
    return `From ${props.stateChange[1]} moved to ${props.stateChange[2]}`;
  };

  return (
    <div className="notification">
      {stateChanged && <div>{ comments() }</div>}
      {stateChanged && <div>{ timeDragged() }</div>}
    </div>
  );
};

export default StateNotice;
