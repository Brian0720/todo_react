import React from "react";
import classnames from "classnames";
import Button from "@mui/material/Button";

class CenterPanel extends React.Component {
  onClick = () => {
    const { setIsDetailsVisible } = this.props;

    setIsDetailsVisible();
  };

  render() {
    const { isDetailsVisible } = this.props;
    const panelCls = classnames("center-panel", {
      fullWidth: isDetailsVisible !== true
    });

    return (
      <div className={panelCls}>
        <Button onClick={this.onClick}>Show Details</Button>
      </div>
    );
  }
}

export default CenterPanel;
