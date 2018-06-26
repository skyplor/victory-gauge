import React from "react";
import PropTypes from "prop-types";

export default class Slice extends React.Component {
  static propTypes = {
    datum: PropTypes.object,
    events: PropTypes.object,
    index: PropTypes.number,
    pathFunction: PropTypes.func,
    slice: PropTypes.object,
    style: PropTypes.object
  };
  renderSlice(props) {
    return (
      <path
        d={props.pathFunction(props.slice)}
        style={props.style}
        {...props.events}
      />
    );
  }

  render() {
    return this.renderSlice(this.props);
  }
}
