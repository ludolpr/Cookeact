import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { UidContext } from "../components/AppContext";
import Log from "../components/log/Login";
import Recipe from "./Recipe";
const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div>
      <Navbar />
      <h1>Bienvenue sur notre site de recettes de cuisine!</h1>
      {uid ? <Recipe /> : <Log signin={true} signup={false} />}
    </div>
  );
};

export default Home;
