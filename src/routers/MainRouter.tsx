/* eslint-disable react/prop-types */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LandingPage } from "../pages/landing";

type MainRouterProps = {
  children?: React.ReactNode;
};

export const MainRouter: React.FC<MainRouterProps> = () => {
  return (
    <Router>
      <Switch>
        <Route path='/main'>
          <HomePage />
        </Route>
        <Route
          // this route has to be at the bottom due to how the router works!
          path='/'
        >
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};
