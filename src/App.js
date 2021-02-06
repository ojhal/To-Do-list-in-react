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

    const updatedList = list.filter(item => item.id !== id);


    this.setState({ list: updatedList });

  }
  render() {
    return (
      <div>


        <div className="App">
          <div>
            <h1 className="app-title">You have 3 Todos</h1>

            Task 1<button>x</button>
            <br />
            Task 2<button>x</button>
            <br />
            Task 3<button>x</button>
            <br />
            <input
              type="text"
              placeholder="Enter item"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button onClick={() => this.addItem()}>Submit</button>
            <br />
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}>x</button>
                </li>
              )
            })}

          </div>

        </div>
      </div>

    )
  }
}

export default App;
