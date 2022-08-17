import React from "react";
import { Popover, Button } from "antd";
import SwitchDetails from "./SwitchDetails";
import DimmerDetails from "./DimmerDetails";
import LockDetails from "./LockDetails";
import ThermoDetails from "./ThermoDetails";

class ShowDeviceDetails extends React.Component {
  state = { visible: false };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const Content = this.props.type === "DIMMER" 
    ? DimmerDetails
    : this.props.type === "LOCK" 
    ? LockDetails
    : this.props.type === "THERMO"
    ? ThermoDetails
    : SwitchDetails;

    return (
      <Popover
        content={<Content {...this.props} hide={this.hide} />}
        title="Device details"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Device Details</Button>
      </Popover>
    );
  }
}

export default ShowDeviceDetails;
