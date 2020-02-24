import React from 'react';

/*class TheDate extends React.Component {
  render() {
    return <div />
  }
}*/

/*class TheDate extends React.Component {
  constructor() {

  }
  render() {
    return <div />
  }
}*/

/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div />
  }
}*/

/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div />
  }
}*/


/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'foo',
      hello: 'Hello, world!',
      list: [1, 2, 3],
      obj: { nested: 'object', yes: true },
    }
  }
  render() {
    console.log(this.state)
    return (
      <div>{this.state.hello}</div>
    );
  }
}*/



/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
  }
  render() {
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}*/


/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
  }
  componentDidMount() {
    setInterval(() => {
      console.log('tick')
    }, 1000)
  }
  render() {
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}*/


/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('tick')
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}*/


/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.state.datetime = new Date()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}*/


/*class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}*/

class TheDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { datetime: new Date() };
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setState({
        datetime: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    console.log('render')
    return (
      <div>{this.state.datetime.toLocaleString()}</div>
    )
  }
}

export default TheDate;