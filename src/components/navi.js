import React from "react";

const NavBar = (props) => {
    const sendDataBack = (Opt) => {
        console.log(Opt);
        props.parentCallback(Opt);
    }
    return <nav className="nav">
        <ul>
            <li className="App-link" onClick={() => sendDataBack("PASE")}>PASE</li>
            <li className="App-link" onClick={() => sendDataBack("SS")}>Sponsor & Selling</li>
            <li className="App-link" onClick={() => sendDataBack("Other")}>Khác</li>
        </ul>
    </nav>
}
export default NavBar;