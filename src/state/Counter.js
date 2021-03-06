import React from 'react';

/*class Counter extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button>
          Add 1
        </button>
      </div>
    )
  }
}*/


/*class Counter extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button
          onClick={function() { console.log('clicked!') }}
        >
          Add 1
        </button>
      </div>
    )
  }
}*/


/*class Counter extends React.Component {
  state = {
    count: 0
  };
  handleButtonClick() {
    console.log('clicked!')
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>
          Add 1
        </button>
      </div>
    )
  }
}*/

/*class Counter extends React.Component {
  state = {
    count: 0
  };
  handleButtonClick() {
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>
          Add 1
        </button>
      </div>
    )
  }
}*/


/*class Counter extends React.Component {
  state = {
    count: 0
  };
  handleButtonClick() {
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={() => this.handleButtonClick()}>
          Add 1
        </button>
      </div>
    )
  }
}*/


/*class Counter extends React.Component {
  state = {
    count: 0
  };

  handleButtonClick = () => {
    console.log(this.state.count)
  }
  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>
          Add 1
        </button>
      </div>
    )
  }
}*/



/*class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick = () => {
    const newCount = this.state.count + 1
    this.setState({
        count: newCount
    })
  }

  render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={() => this.handleButtonClick()}>
          Add 1
        </button>
      </div>
    )
  }
}*/


class Counter extends React.Component {

  static defaultProps = {
    step: 1
  };

  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = {
      count: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick = () => {
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonClick', this.state)
    this.setState({ count: this.state.count + this.props.step })
  }

  render() {
    console.log('hello', this.state.count)
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={() => this.handleButtonClick()}>
          Add 1
        </button>
      </div>
    )
  }
}



export default Counter;