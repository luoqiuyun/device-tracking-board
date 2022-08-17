import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles.css";
import TrackingBoard from "./components/TrackingBoard";
import data from "./data/task-plan.json";

function App() {
  return (
    <div className="App">
      <h1>Device Tracking Board</h1>
      <TrackingBoard data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
