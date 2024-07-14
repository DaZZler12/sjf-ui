import { lightBlue } from "@mui/material/colors";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import SjfList from "../features/sjf/pages/List/SjfList";
import SjfDetails from "../features/sjf/pages/Details/SjfDetails";
import ComponentBuilder from "../componentbuilder/ComponentBuilder";
import SjfLayout from "../features/sjf/pages/SjfLayout";
import NotFound from "../features/sjf/components/notfound/NotFoundComponent";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<SjfLayout />} />
        <Route path="/:id/view" element={<SjfDetails />} />
      </Route>
      <Route path="/test" element={<ComponentBuilder />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
