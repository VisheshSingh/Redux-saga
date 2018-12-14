import React, { Component } from "react";
import { connect } from "react-redux";

class MyComp extends Component {
  render() {
    return (
      <div>
        <span>Your Age: </span>
        <span>{this.props.age}</span>
        <br />
        <button onClick={this.props.onAgeUp}>Age up</button>
        <button onClick={this.props.onAgeDown}>Age down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "ADD", value: 1 }),
    onAgeDown: () => dispatch({ type: "SUBTRACT", value: 1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComp);
