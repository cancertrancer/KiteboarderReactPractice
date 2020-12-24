import React from 'react';
import './ResultsWindow.css';

class ResultsWindow extends React.Component {
  render() {
      return (
        <div className="resultsWindow">
            {this.props.searchResults}
        </div>
      );
  }
}

export default ResultsWindow;