import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavegationBar from "./components/NavegationBar";
import SchedulingForm from "./pages/Scheduling/SchedulingForm";
import SchedulingList from "./pages/Scheduling/SchedulingList";

const routes = [
   {
      path: "/patient/scheduling",
      component: SchedulingForm,
      name: SchedulingForm,
      exact: true,
   },
   {
      path: "/patient/schedulings",
      component: SchedulingList,
      name: SchedulingList,
      exact: true,
   }
];

const Routes = () => {
   return (
      <Router>
         <NavegationBar/>
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