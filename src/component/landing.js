import React, { Component } from "react";
// import Particles from "react-particles-js";
import { Link } from "react-router-dom";
export default class landing extends Component {
  render() {
    return (
      <div>
        

        <div id="text1">
          <p className="subtitle col">Radioactive is here</p>
          <h1 className="title">
            <div className="col flexMe">
              <div>new society </div>
              <div>of trust</div>
            </div>
          </h1>
        </div>
        <Link to="/knowMore">
          {" "}
          <div className="btnDiv">
            <div>Know More</div>
          </div>
        </Link>

        <div className="img-3"></div>
        <div class="overlay first"></div>
        <div class="overlay second"></div>
        <div class="overlay third"></div>
      </div>
    );
  }
}
