import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Green from "./Green";
import Pink from "./Pink";

const Main = (props) => {
  return (
    <div>
      <div id="container">
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/green">Green</Link>
          <Link to="/pink">Pink</Link>
        </nav>
      </div>
      <div id="main-section">
        <Switch>
          <Route path="/blue" component={Blue} />
          <Route path="/green" component={Green} />
          <Route path="/pink" component={Pink} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
};

const app = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  app
);

// const Main = (props) => {
//   return (
//     <div>
//         <div id="container">
//         <nav id="navbar">
//           <a href="/">Home</a>
//           <a href="/blue">Blue</a>
//           <a href="/green">Green</a>
//           <a href="/pink">Pink</a>
//         </nav>
//       </div>
//       <div>

//       </div>
//     </div>

//   )
// }
