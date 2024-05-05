import React from "react";
import "./Home.css";
import Intro from "../../Components/Intro/Intro";
import Experience from "../../Components/Experience/Experience";

function Home() {
  return (
    <div className="home">
      <Intro/>
      <Experience/>
    </div>
  )
}

export default Home;

