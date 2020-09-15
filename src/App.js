import React, { Component } from 'react'

class App extends Component {

  state = {
    item: '',
    items: []
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }


  handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(this.state.items))
    items.push(this.state.item)
    this.setState({items})

    console.log(this.state.item)
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="item">item</label>
          <input
           type="text" 
           name="item"
           value={this.state.item}
           onChange={this.handleInputChange}
           />
          <button onClick={this.handleAddItem}>Add Item</button>
        </form>

        <ul>
          {
            this.state.items.map(item => <li>{item}</li>)
          }
        </ul>
      </>
    )
  }
}

export default App;
