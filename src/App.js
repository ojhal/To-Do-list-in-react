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
  deleteItem(id) {
    const list = [...this.state.list];

    const updateList = list.filter(item => item.id !== id);


    this.setState({ list: updated });

  }
  render() {
    return (
      <div className="App">
        <div>

          <li>Task1</li>
          <li>Task2</li>
          <li>Task3</li>

          <br />
          <input
            type="text"
            placeholder="Enter item"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>Submit</button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button>onClick={() => this.deleteItem(item.id)}x</button>
                </li>
              )
            })}
          </ul>
        </div>

      </div>

    )
  }
}

export default App;
