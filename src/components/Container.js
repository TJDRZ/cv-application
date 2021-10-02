import React, { useState } from "react";
import uniqid from "uniqid";
import "../styles/container.css";

function Container(props) {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems(items.concat(props.component(uniqid())));
  };

  const del = (key) => {
    setItems(items.filter((item) => item.key !== key));
  };

  const { header, type, title } = props;

  return (
    <div>
      <h3>{header}</h3>
      {title ? <hr className="title-hr" /> : <hr className="task-hr" />}
      <button onClick={addItem}>Add {type} +</button>
      {title ? (
        <ul>
          {items.map((item) => (
            <li key={item.key} className="title-li">
              <span>
                {item}
                <button onClick={() => del(item.key)}>DEL</button>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.key} className="task-li">
              {item}
              <button onClick={() => del(item.key)}>DEL</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Container;
