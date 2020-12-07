import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'antd/dist/antd.css';
import store from './app/store';
import Dashboard from "./features/dashboard/Dashboard";
import Signin from "./features/signin/Signin";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
       <BrowserRouter>
       <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signin" component={Signin} />
          <Route exact path="/" component={() => <h1>index</h1>} />
        </Switch>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
