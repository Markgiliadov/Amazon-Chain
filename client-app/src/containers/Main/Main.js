import React from "react";
import { Routes, Route } from "react-router-dom";
import AddNewProject from "../AddNewProject/AddNewProject";
import Home from "../../components/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Administrator from "../Administrator/Administrator";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import Transactions from "../../components/Transactions/Transactions";
import Welcome from "../../components/Transactions/Welcome";
const Main = (props) => {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Administrator" exact element={<Administrator />} />
        <Route path="/AddNewProject" element={<AddNewProject />} />
        <Route path="/Transactions" element={<Welcome />} />
        <Route
          path="/Login"
          element={<Login triggerLoginStatus={props.triggerLoginStatus} />}
        />
        <Route path="/Register" element={<Register />} />
        <Route exact path="/ProjectDetails/:id" element={<ProjectDetails />} />
        <Route exact path="/AddNewProject/:id" element={<AddNewProject />} />
      </Routes>
    </>
  );
};

export default Main;
