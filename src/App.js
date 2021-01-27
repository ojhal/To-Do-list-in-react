import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          Add an Item...
          <br />
          <input
            type="text"
            placeholder="Type item here.."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addItem()}></button>
            Add
        </div>

      </div>

    )
  }
}

export default App;
