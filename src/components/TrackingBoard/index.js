import React, { useState } from "react";
import Board from "react-trello";
import CustomCard from "../CustomCard";

const TrackingBoard = ({ data }) => {
  const [stateChange, setStateChange] = useState([]);
  const handleDragEnd = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    setStateChange([cardId, sourceLaneId, targetLaneId, position, cardDetails]);
  };

  return (
    <Board
      data={data}
      draggable
      customCardLayout
      handleDragEnd={handleDragEnd}
    >
      <CustomCard stateChange={stateChange} />
    </Board>
  );
}

export default TrackingBoard;
