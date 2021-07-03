import React, { Component } from "react";
import uniqid from "uniqid";

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  addItem = () => {
    this.setState(() => ({
      items: this.state.items.concat(this.props.component(uniqid())),
    }));
  };

  delete = (key) => {
    this.setState(() => ({
      items: this.state.items.filter((item) => item.key !== key),
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.addItem}>Add {this.props.type} +</button>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.key}>
              {item}
              <button onClick={() => this.delete(item.key)}>DEL</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Container;
