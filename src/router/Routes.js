import React from "react";

// All HOME PAGE ROUTES
import EventOrganizer from "../views/all-home-pages/EventOrganizer";

// Not Found Page
import NotFound from "../views/NotFound";

// Route Specific
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route path="/" component={EventOrganizer} />

          {/* NotFound Route */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
