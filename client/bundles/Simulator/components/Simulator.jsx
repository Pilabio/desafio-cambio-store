import React from 'react';

export default class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.last_value
    }
  }

  render() {
    return (
      <div>
        <h1>Dólar {this.state.value}</h1>
      </div>
    );
  }
}
