import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <nav>
              <div>Logo</div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            {routes}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
