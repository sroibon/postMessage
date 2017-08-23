import React, { Component } from 'react';
import './ParallelApp.css'

class ParallelApp extends Component {
  render() {
    return <iframe src="http://localhost:5001" title="hosted-app"></iframe>;
  }
}

export default ParallelApp;