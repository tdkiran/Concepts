import React, { Component } from 'react';
import Comp1 from './components/Comp1/Comp1';
import Comp2 from './components/Comp2/Comp2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Comp1 />
        <Comp2 />
      </div>
    );
  }
}

export default App;
