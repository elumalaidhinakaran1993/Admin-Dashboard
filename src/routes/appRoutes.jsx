
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeNames } from "../constants/routePath";
import Dashboard from "../pages/sideMenu";

function appRoutes() {
  return (

    <Routes>
    <Route exact path='/' element={<Dashboard />} />
   
    
  </Routes>
  )
}

export default appRoutes