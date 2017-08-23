import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ParallelApp from './components/ParallelApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleHostedAppMessage = this.handleHostedAppMessage.bind(this); // bind's the handler event to 'this'.
    this.sendMessageToHostedApp = this.sendMessageToHostedApp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.addEventListenerForCurrentWindow();
  }

  componentWillUnmount() {
    this.removeListenerForCurrentWindow();
  }

  handleHostedAppMessage(event) {
    console.log('Hosted/child APP message in port 3000 recieved from: ', event.origin);
    console.log('Data:', event.data);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  sendMessageToHostedApp(event) {
    let message = this.state.value;
    window.frames[0].postMessage(message, 'http://localhost:5001');
    this.clearInput();
  }

  clearInput() {
    this.setState({value: ''});
  }

  addEventListenerForCurrentWindow() {
    window.addEventListener('message', this.handleHostedAppMessage, false);
  }

  removeListenerForCurrentWindow() {
    window.removeEventListener('message', this.handleHostedAppMessage, false);
  }

  render() {
    return (
      <div className="App">
        <h1>Host APP @ :3000</h1>
        <p>Welcome to Host app</p>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <br/>
        <br/>
        <button onClick={this.sendMessageToHostedApp}>Send message</button>
        <ParallelApp />
      </div>
    );
  }
}

export default App;
