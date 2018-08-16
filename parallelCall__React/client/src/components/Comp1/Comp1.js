import React, { Component } from 'react';

class Comp1 extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      unlimitted: false,
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/deviceInfo')
      .then(res => res.json())
      .then(data => {
        this.setState({ ...this.state, ...data });
      });
  }
  render() {
    return (
      <div>
        <h1>Comp1</h1>
        {this.state.title} {this.state.price}
        {this.state.unlimitted && <b>Unlimitted</b>}
      </div>
    );
  }
}

export default Comp1;
