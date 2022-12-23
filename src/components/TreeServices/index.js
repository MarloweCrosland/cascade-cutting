import React from "react";
import before from "./before.jpg";
import after from "./after.jpg";
import "./index.css";
import TreeService2 from "../TreeServices2";

export default function TreeService() {
    return (
        <div id="section-container">
            <div className="photos">
                <div className="photo-container">
                    <img alt="before" src={require("./before.jpg")}></img>
                </div>

                <div className="photo-container">
                    <img alt="after" src={require("./after.jpg")}></img>
                </div>
            </div>

            <div className="text-container">
                <div className="center-text"><h3><b>Tree Services</b></h3></div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </div>

            

        </div>
    );
}
