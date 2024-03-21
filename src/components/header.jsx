import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css"

function Header(){
    return(
        <div className="header">
            <Link className="title" to={"/"}>BAKAWAKA</Link>
        </div>
    );
};

export default Header;
