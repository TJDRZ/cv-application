import React, { useState } from "react";
import uniqid from "uniqid";
import "../styles/container.css";

type ContainerProps = {
  component: React.ReactNode;
  header?: string;
  type: string;
  title: boolean;
};

type ContainerItem = {
  key: string;
  component: React.ReactNode;
};

const Container = (props: ContainerProps) => {
  const { component, header, type, title } = props;

  const [items, setItems] = useState<ContainerItem[]>([]);

  const addItem = () => {
    setItems([...items, { key: uniqid(), component }]);
  };

  const del = (key: string) => {
    setItems(items.filter((item) => item.key !== key));
  };

  return (
    <div>
      <h3>{header}</h3>
      {title ? <hr className="title-hr" /> : <hr className="task-hr" />}
      <button onClick={addItem}>Add {type} +</button>
      {title ? (
        <ul>
          {items.map((item) => (
            <li key={item.key} className="title-li">
              {item.component}
              <button onClick={() => del(item.key)}>DEL</button>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.key} className="task-li">
              {item.component}
              <button onClick={() => del(item.key)}>DEL</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Container;
