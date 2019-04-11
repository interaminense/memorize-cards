import React, { Component } from 'react';
import WithCards from './hocs/Cards';

import './style/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WithCards />
      </div>
    );
  }
}

export default App;
