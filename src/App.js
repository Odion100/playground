import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Client } from "tasksjs-react-client";

(async () => {
  window.buAPI = await Client.loadService("http://localhost:7899/bu/api");
  console.log(window.buAPI);
})();

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
