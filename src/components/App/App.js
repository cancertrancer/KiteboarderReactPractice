import React from 'react';
import './App.css';
import Results from '../Results/Results';
import Windy from '../../util/Windy';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: Windy.search()
    };
  }

  render() {
    return (
      <div className="App">
        <Results searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;