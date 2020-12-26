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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      searchResults: Windy.search()
    });
  }

  render() {
    return (
      <div className="App">
        <Results searchResults={this.state.searchResults} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;