import React, { useState, memo } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// style
import "./styles.css";
// pages
import { TablePage } from "./pages/TablePage";
import { SpacehipPage } from "./pages/spaceshipPage";

const App = memo(() => {
  const [spaceshipData, setSpaceshipData] = useState(null);
  const spaceshipUrl = "/spaceship/details";
  const tableProps = {
    tableHead: ["name", "length", "crew"],
    url: "https://swapi.co/api/starships",
    setSpaceshipData,
    moreInfoUrl: spaceshipUrl
  };
  const spaceshipProps = {
    spaceshipData,
    spaceshipDataKeys: tableProps.tableHead.concat([
      "model",
      "passengers",
      "cargo_capacity",
      "consumables",
      "hyperdrive_rating",
      "MGLT"
    ])
  };

  return (
    <Router>
      <Route
        path="/"
        exact
        component={routerProps => (
          <TablePage {...routerProps} {...tableProps} />
        )}
      />
      <Route
        path={spaceshipUrl}
        component={() => <SpacehipPage {...spaceshipProps} />}
      />
    </Router>
  );
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
