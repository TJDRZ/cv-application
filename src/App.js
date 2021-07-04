import Header from "./components/Header";
import Container from "./components/Container";
import School from "./components/School";
import Work from "./components/Work";
import save from "./save";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container
        component={_addSchool}
        header="Education"
        type="School"
        title={true}
      />
      <Container
        component={_addWork}
        header="Work Experience"
        type="Work"
        title={true}
      />
      <button onClick={() => save()}>Save</button>
    </div>
  );
}

// Support Functions
const _addSchool = (id) => <School key={id} />;
const _addWork = (id) => <Work key={id} />;

export default App;
