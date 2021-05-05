/* eslint-disable react/prop-types */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/home";

type MainRouterProps = {
  children: React.ReactNode;
};

export const MainRouter: React.FC<MainRouterProps> = ({ children }) => {
  return (
    <Router>
      <div>
        {children}
        <Switch>
          <Route path='/main'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
