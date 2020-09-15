import React, { Component } from 'react'

class App extends Component {

  state = {
    count: 0,
  }

  handleClick = (event) => {
    let num = parseInt(event.target.value)
    if (num === 0) {
      this.setState({ count: 0 })
    } else {
      this.setState({ count: this.state.count + num })
    }
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick} value={1}>1</button>
        <button onClick={this.handleClick} value={2}>2</button>
        <button onClick={this.handleClick} value={3}>3</button>
        <button onClick={this.handleClick} value={4}>4</button>
        <button onClick={this.handleClick} value={5}>5</button>
        <button onClick={this.handleClick} value={0}>Reset</button>

      </>
    )
  }
}

export default App;
