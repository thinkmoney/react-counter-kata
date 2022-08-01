
import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <Link className='App-link' to="/">Home</Link>
            <Link className='App-link' to="/about">About</Link>
        </nav>

    );
  }
  
  export default NavBar;