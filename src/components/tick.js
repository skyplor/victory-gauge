import React from "react";
import PropTypes from "prop-types";

export default class Tick extends React.Component {
  static propTypes = {
    angle: PropTypes.string,
    events: PropTypes.object,
    style: PropTypes.object,
    x1: PropTypes.number,
    x2: PropTypes.number,
    y1: PropTypes.number,
    y2: PropTypes.number
  };
  render() {
    const { style, angle, events, x1, x2, y1, y2 } = this.props;
    return (
        <g {...events}>
          <line
            transform={`rotate(${angle}, ${x1}, ${y1})`}
            style={style}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
          />
        </g>
    );
  }
}

