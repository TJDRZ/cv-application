import Header from "./components/Header";
import Container from "./components/Container";
import School from "./components/School";
import Work from "./components/Work";
import save from "./save";

function App() {
  return (
    <div className="App">
      <Header />
      <Container component={addSchool} type="School" />
      <Container component={addWork} type="Work" />
      <button onClick={() => save()}>Save</button>
    </div>
  );
}

// Support Functions
const addSchool = (id) => <School key={id} />;
const addWork = (id) => <Work key={id} />;

export default App;
