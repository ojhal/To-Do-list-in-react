import React, { Component } from "react";

// import Counter from "./Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      bgcolor: true
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

  changeColor = () => {
    this.setState({ bgcolor: !this.state.bgcolor })
  }


  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);


    this.setState({ list: updatedList });

  }
  render() {
    let btn_class = this.state.bgcolor ? "black" : "white";
    return (
      <div>


        <div className="App">
          <h3>You have 3 Todos</h3>
          {/* <div>
            <h3>You have 3 Todos</h3>

            <input
              type="text"
              placeholder="Enter item"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}
            /> */}
          {/* <button className="button button2" onClick={() => this.addItem()}>Submit</button> */}
          {this.state.list.map(item => {
            return (
              <h4 key={item.id}>
                {item.value}
                <button className="button button1"
                  onClick={() => this.deleteItem(item.id)}>x</button>
                <button className={btn_class}
                  onClick={this.changeColor}>+</button>


              </h4>
            )
          })}
          <div>

            <input
              type="text"
              placeholder="Enter item"
              value={this.state.newItem}
              onChange={e => this.updateInput("newItem", e.target.value)}

            />

            <button className="button button2" onClick={() => this.addItem()}>Submit</button>
            {/* <Counter /> */}
          </div>

        </div>
      </div >

    )
  }
}


export default App;
