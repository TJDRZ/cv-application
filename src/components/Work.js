import Input from "./Input";
import Container from "./Container";
import "../styles/list-container.css";

function Work() {
  return (
    <div className="list-container">
      <Input type="Work Name" placeholder="Please Enter Your Work" />

      <Input type="Work Title" placeholder="Please Enter Your Title" />

      <Input type="Work Date" placeholder="Please Enter Your Work Date" />

      <Container component={_addTask} type="Tasks" title={false} />
    </div>
  );
}

// Support Function
const _addTask = (id) => (
  <Input key={id} type="Work Task" placeholder="Please Enter Your Work Task" />
);

export default Work;
