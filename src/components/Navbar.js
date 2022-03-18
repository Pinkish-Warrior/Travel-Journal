
import React from "react"
import reactEarth from "../images/earth.png"

export default function Navbar(){
    return (
        <nav className="navbar--primary">
            <div>
                <img alt="" src={reactEarth} className="globe-img" />
                <h3>my travel jornal.</h3>
            </div>
        </nav>
    )
}