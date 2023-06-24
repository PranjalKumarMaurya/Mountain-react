import React from "react";
import "./Home.scss";
import HOME from "./Home.png";

export default function Home() {
  return (
    <section
      className="home-wrapper"
      style={{
        backgroundImage: `url(${HOME})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1 className="title1">LOSANGLES</h1>
      <h1 className="title2">MOUNTAINS</h1>
    </section>
  );
}
