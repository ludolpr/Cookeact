import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Recipe from "../../pages/Recipe";
import About from "../../pages/About";

// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

const routeContainer = () => {
  return (
    // <Router history={history}>
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/recipes" Component={Recipe} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};

export default routeContainer;
