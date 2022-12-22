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
                <h3>Tree Pruning</h3>
                At Cascade Cutting Services, our tree experts specialize in both
                residential and commercial properties. We can remove hazardous
                trees, as well as prune and trim to keep trees healthy. No tree is too large or too small!
            </div>

            

        </div>
    );
}
