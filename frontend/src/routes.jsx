import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavegationBar from "./components/NavegationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SchedulingForm from "./pages/Scheduling/SchedulingForm";
import SchedulingList from "./pages/Scheduling/SchedulingList";

const routes = [
   {
      path: "/home",
      component: Home,
      name: Home,
      exact: true
   },
   {
      path: "/paciente/agendamento",
      component: SchedulingForm,
      name: SchedulingForm,
      exact: true,
   },
   {
      path: "/paciente/agendamentos",
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
         <Footer title="Aitor Ruiz"/>
      </Router>
   );
};

export default Routes;