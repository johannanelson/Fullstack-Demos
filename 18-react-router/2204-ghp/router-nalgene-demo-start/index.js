import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Blue = (props) => {
  console.log("Props", props)
  return (
    <div>
      <h1>Cerulean Blue Nalgene</h1>
      <img src="./public/blue.jpg" alt="blue" />
      <h4>Price: ${props.price}</h4>
    </div>
  );
};

const Green = (props) => {
  return (
    <div>
      <h1>Green Nalgene</h1>
      <img src="./public/green.jpg" />
    </div>
  );
};

const Pink = (props) => {
  return (
    <div>
      <h1>Pink Nalgene</h1>
      <img src="./public/pink.jpg" />
    </div>
  );
};

const Home = (props) => {
  return (
    <div>
      <h1>An Assortment of Nalgene Bottles.</h1>
      <img src="./public/outdoors.jpeg" />
    </div>
  );
};

const Main = (props) => {
  return (
    <div id="container">
      <div id="navbar">
      </div>
      <div id="main-section">
      </div>
    </div>
  );
};

const app = document.getElementById("app");
ReactDOM.render(
    <Main />,
  app
);
