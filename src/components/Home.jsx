import React from "react";
import "./Home.css";
import perfil from "../imagenes/perfildelfi.png";

const Home = () => {
  return (
    <div className="home">
      <div className="bubbles">
        <span style={{ "--i": 10 }}></span>
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 25 }}></span>
        <span style={{ "--i": 36 }}></span>
        <span style={{ "--i": 21 }}></span>
        <span style={{ "--i": 46 }}></span>
        <span style={{ "--i": 28 }}></span>
        <span style={{ "--i": 50 }}></span>
        <span style={{ "--i": 33 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 45 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 39 }}></span>
        <span style={{ "--i": 74 }}></span>
        <span style={{ "--i": 62 }}></span>
        <span style={{ "--i": 58 }}></span>
      </div>
      <div className="home-left">
        <h2>WELCOME!</h2>
        <h1>I'm Delfina Paz Zavalia</h1>
        <span>_________</span>
        <p>FullStack Web Developer</p>
        <button class="my-button">CONTACT ME</button>
      </div>
      <div className="home-right">
        <img src={perfil} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
