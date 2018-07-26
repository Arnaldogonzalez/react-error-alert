import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Notifications extends Component {
  render() {
    return (
      <div className="window-info">
        <div className="info-container">
          <p className="info">Info:</p>
          <p className="info-text">User pending action</p>
        </div>
        <div className='warning-container'>
          <p className="warning">Warning:</p>
          <p className="warning-text">User has to be admin</p>
        </div>
        <div className="error-container">
          <p className="error">Error: </p>
          <p className="error-text">Internal Server Error</p>
        </div>
        <div className='success-container'>
          <p className="success">Success:</p>
          <p className="success-text">Updated members status</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Notifications />, document.querySelector('#root'));