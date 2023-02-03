import React from "react";
import axios from "axios";

import Layout from "./hoc/Layout/Layout";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import AddNote from "./containers/notes-de-frais/add-note/AddNote";
import UpdateNote from "./containers/notes-de-frais/update-note/UpdateNote";
import AddReport from "./containers/rapports/add-report/AddReport";
import ListNote from "./containers/notes-de-frais/list-note/ListNote";
import ListReport from "./containers/rapports/list-report/ListReport";
import UpdateReport from "./containers/rapports/update-report/UpdateReport";


axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.headers["contentType"] = "application/json" 


function App() {
  return (
    <Router>
      
      <Layout>
      <Switch>
      <Route path="/notes" >
        <ListNote />
        </Route>
        <Route path="/createNote" >
        <AddNote />
        </Route>
        <Route path="/updateNote/:id" render={(props)=> <UpdateNote {...props} />} />
        <Route path="/reports" >
        <ListReport />
        </Route>
        <Route path="/createReport" >
        <AddReport />
        </Route>
        <Route path="/updateReport/:id" render={(props)=> <UpdateReport {...props} />} />
        
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
