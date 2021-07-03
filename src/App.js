import Header from "./components/Header";
import Container from "./components/Container";
import School from "./components/School";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Container component={addSchool} type="School" />
      <Container component={addWork} type="Work" />
    </div>
  );
}

// Support Functions
const addSchool = (id) => <School key={id} />;
const addWork = (id) => <Work key={id} />;

export default App;
