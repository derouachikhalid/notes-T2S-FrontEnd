import React from "react";
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import AddNote from "./containers/notes-de-frais/add-note/AddNote";

function App() {
  return (
    <Router>
      <Layout>
        <AddNote />
      </Layout>
    </Router>
  );
}

export default App;
