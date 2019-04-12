import React, { Component } from 'react';
import WithCards from './hocs/Cards';
import Header from './components/Header';

import './style/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Memorize App" />
        <WithCards />
      </div>
    );
  }
}

export default App;
