import React from "react";
import PropTypes from "prop-types";

export default class Needle extends React.Component {
  static propTypes = {
    events: PropTypes.object,
    needleHeight: PropTypes.number,
    path: PropTypes.string,
    rotation: PropTypes.number,
    style: PropTypes.object
  };
  drawNeedle(height) {
    if (this.props.path) {
      return this.props.path;
    }
    return `M 0 5 C -1,5 -4,3 -6,0 L 0 -${height} L 6 0 C 4,3 1,5 0,5`;
  }
  render() {
    const { events, rotation, style, needleHeight } = this.props;
    return (
        <path
          {...events}
          transform={`rotate(${rotation})`}
          style={style}
          d={this.drawNeedle(needleHeight)}
        />
    );
  }
}

