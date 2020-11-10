import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" />
          <Route path="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
