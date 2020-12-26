import React from 'react';
import './Results.css';
import ResultsWindow from '../ResultsWindow/ResultsWindow';

class Results extends React.Component {
    render() {
      return (
        <div className="resultsContainer">
          <ResultsWindow searchResults={this.props.searchResults} />
          <button onClick={this.props.onClick}>Refresh</button>
        </div>
      );
    }
}

export default Results;