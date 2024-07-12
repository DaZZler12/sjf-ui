import { lightBlue } from "@mui/material/colors";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import SjfList from "../features/sjf/pages/List/SjfList";
import SjfDetails from "../features/sjf/pages/Details/SjfDetails";
import ComponentBuilder from "../componentbuilder/ComponentBuilder";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<SjfList />} />
        <Route path="/:id/view" element={<SjfDetails />} />
      </Route>
      <Route path="/test" element={<ComponentBuilder />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

const About = () => {
  return (
    <>
      <h1>About</h1>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <h1>Contact</h1>
    </>
  );
};

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
      }}
    >
      <h1>404 Not Found!</h1>
    </div>
  );
};
