import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import School from "./components/School";
import Work from "./components/Work";
import "./styles/style.css";

const App = () => {
  return (
    <main className="App">
      <h1>CV Application:</h1>
      <Header />
      <Container
        component={<School />}
        header="Education"
        type="School"
        title={true}
      />
      <Container
        component={<Work />}
        header="Work Experience"
        type="Work"
        title={true}
      />
      <button onClick={() => window.print()}>Save</button>
    </main>
  );
};

export default App;
