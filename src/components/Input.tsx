import React, { useState } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  pattern?: string;
};

const Input = (props: InputProps) => {
  const { type, placeholder, pattern } = props;

  const [text, setText] = useState("");
  const [textSet, setTextSet] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const submit = () => {
    setTextSet(true);
  };

  const edit = () => {
    setTextSet(false);
  };

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
            onChange={(e) => update(e)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Input;
