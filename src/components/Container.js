import React, { Component } from "react";
import uniqid from "uniqid";
import "../styles/container.css";

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
    const { header, type, title } = this.props;
    return (
      <div>
        <h3>{header}</h3>
        {title ? <hr className="title-hr" /> : <hr className="task-hr" />}
        <button onClick={this.addItem}>Add {type} +</button>
        {title ? (
          <ul>
            {this.state.items.map((item) => (
              <li key={item.key} className="title-li">
                <span>
                  {item}
                  <button onClick={() => this.delete(item.key)}>DEL</button>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {this.state.items.map((item) => (
              <li key={item.key} className="task-li">
                {item}
                <button onClick={() => this.delete(item.key)}>DEL</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Container;
