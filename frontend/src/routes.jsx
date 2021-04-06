import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SchedulingForm from "./components/SchedulingForm";

const routes = [
   {
      path: "/patient/scheduling",
      component: SchedulingForm,
      name: SchedulingForm,
      exact: true,
   },
];

const Routes = () => {
   return (
      <Router>
         <Switch>
            {routes.map((route, index) => (
               <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
               ></Route>
            ))}
         </Switch>
      </Router>
   );
};

export default Routes;