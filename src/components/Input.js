import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      textSet: false,
    };
  }

  update = (e) => {
    this.setState(() => ({
      text: e.target.value,
    }));
  };

  submit = () => {
    this.setState(() => ({
      textSet: true,
    }));
  };

  edit = () => {
    this.setState(() => ({
      textSet: false,
    }));
  };

  render() {
    const { text, textSet } = this.state;
    const { type, placeholder, pattern } = this.props;
    return (
      <div>
        {textSet ? (
          <div>
            <span>{text} </span>
            <button onClick={this.edit}>Edit</button>
          </div>
        ) : (
          <form onSubmit={this.submit}>
            <label htmlFor={type}>{type}: </label>
            <input
              type="text"
              name={type}
              required
              placeholder={placeholder}
              pattern={pattern}
              onChange={this.update}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Input;
