import React from "react";
import Hero from "../../Section/Hero/Hero";
import ContestType from "../../Section/ContestType/ContestType";
import Topwinner from "../../Section/Topwinner/Topwinner";

const Home = () => {
  return (
    <div className=" border">
      <Hero/>
      <ContestType/>
      <Topwinner/>
    </div>
  );
};

export default Home;
