import React from "react";
import before from "./before.jpg";
import after from "./after.jpg";
import "./index.css";

export default function TreeService4() {
    return (
        <div id="section-container">

            <div className="text-container">
                <h3><b>Fire Prevention</b></h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </div>


            <div className="photos">
                <div className="photo-container">
                    <img alt="before" src={require("./before.jpg")}></img>
                </div>

                <div className="photo-container">
                    <img alt="after" src={require("./after.jpg")}></img>
                </div>
            </div>
        </div>
    );
}
