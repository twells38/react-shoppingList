import React, { Component } from "react";
import ShoppingListform from "./ShoppingListForm";
import { v4 as uuidv4 } from "uuid";
import "./ShoppingLists.css";

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        // { name: "Milk", qty: "2 gallons", id: uuidv4() },
        // { name: "Bread", qty: "2 loaves", id: uuidv4() },
      ],
      message: "add items on your list!"
    };
    this.addItem = this.addItem.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }
  addItem(item) {
    let newItem = { ...item, id: uuidv4() };
    this.setState(state => ({
      items: [...state.items, newItem]
    }));
  }
  /*remove(id) {
    this.setState({
      items: this.state.items.filter(item => item.id != id)
    });
  }*/

  removeItem = item => {
    let arr = this.state.items;
    let pos = arr.indexOf(item);
    arr.splice(pos, 1);
    this.setState({ items: arr });
  };
  clearAll() {
    this.setState({
      items: [],
      message: "No items on your list !"
    });
  }

  renderItems = () => {
    return (
      <div>
        <ul>
          {this.state.items.map(item => (
            <li key={item}>
              <button
                onClick={() => {
                  this.removeItem(item);
                }}
              >
                <i class="fas fa-trash-alt"></i>
              </button>
              {item.name} : {item.qty}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    const { message, items } = this.state;

    return (
      <div className="Lists">
        <h1>Shopping List</h1>
        {items.length === 0 && <p>{message}</p>}

        {this.renderItems()}
        {message === "" || items.length > 0}
        <ShoppingListform addItem={this.addItem} />
        <div className="Button-clearAll">
          <button className="Button" onClick={this.clearAll}>
            Clear Lists
          </button>
        </div>
      </div>
    );
  }
}

export default ShoppingList;
