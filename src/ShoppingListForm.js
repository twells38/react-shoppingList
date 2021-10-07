import React, { Component } from "react";
import "./ShoppingListForm.css";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      qty: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault(); // to not refresh the page
    this.props.addItem(this.state);
    this.setState({ name: "", qty: "" });
  }

  render() {
    return (
      <div>
        <form className="Form-details" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              className="Name"
              id="namme"
              name="name"
              value={this.state.name}
              type="text"
              onChange={this.handleChange}
            />
          </label>

          <label className="Label-Quantity" htmlFor="qty">
            Quantity:
            <input
              className="Quantity"
              id="qty"
              name="qty"
              value={this.state.qty}
              type="text"
              onChange={this.handleChange}
            />
          </label>

          <button className="Button">Add Items</button>
        </form>
      </div>
    );
  }
}

export default ShoppingListForm;
