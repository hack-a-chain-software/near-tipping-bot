import routes from "~react-pages";
import { Header } from "@/components/header";
import Space from "./space";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const Pages = () => {
  return useRoutes(routes);
};

export const App = () => (
  <Router>
    <Space />
    <Pages />
  </Router>
);
