import React, { useState } from "react";

function Input(props) {
  const [text, setText] = useState("");
  const [textSet, setTextSet] = useState(false);

  const update = (e) => {
    setText(e.target.value);
  };

  const submit = () => {
    setTextSet(true);
  };

  const edit = () => {
    setTextSet(false);
  };

  const { type, placeholder, pattern } = props;
  return (
    <div>
      {textSet ? (
        <div>
          <span>{text} </span>
          <button onClick={edit}>Edit</button>
        </div>
      ) : (
        <form onSubmit={submit}>
          <label htmlFor={type}>{type}: </label>
          <input
            type="text"
            name={type}
            required
            placeholder={placeholder}
            pattern={pattern}
            onChange={update}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Input;
