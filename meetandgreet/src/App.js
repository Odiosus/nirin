import React from "react";
import "./App.css";
import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Switch } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" render={(props) => <BookingPage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
