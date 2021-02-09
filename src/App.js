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
            <h2 className="app-title">You have 3 Todos</h2>

            <h3>task 1<button className="button button1">x</button></h3>
            <br />
            <h3>task 2<button className="button button1">x</button></h3>
            <br />
            <h3>task 3<button className="button button1">x</button></h3>
            <br />
            <input
              type="text"
              placeholder="Enter item"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            />
            <button className="button button2" onClick={() => this.addItem()}>Submit</button>
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
