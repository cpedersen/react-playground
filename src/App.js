import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Tabs from './state/Tabs';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

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
        <Counter count={123} step={5}/>
      </div>
    );
  }
}*/



/*class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld/>
      </div>
    );
  }
}*/


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <Bomb/>
      </div>
    );
  }
}*/


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <RouletteGun/>
      </div>
    );
  }
}*/


const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs tabs={tabsProp} />
      </div>
    );
  }
}

export default App;