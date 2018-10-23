import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import routes from "./routes";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='apps'>
            <nav>
            <Link to="/">
              <img src='http://dynastyband.com/graphics/artist774.jpg'/>
            </Link>
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
