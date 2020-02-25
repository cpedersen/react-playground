import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <TheDate/>
      </div>
    );
  }
}*/

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <TheDate/>
      </div>
    );
  }
}*/

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <TheDate/>
        <Counter/>
      </div>
    );
  }
}*/

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <TheDate/>
        <Counter count={123}/>
      </div>
    );
  }
}*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld/>
      </div>
    );
  }
}

export default App;