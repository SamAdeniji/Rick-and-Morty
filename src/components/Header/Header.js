import React from "react";
import { Link } from "react-router-dom";
// import About from "../About";
// import Homepage from "../Homepage";
// import NoPage from "../NoPage";

export default function Header() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/NoPage">Welcome Pam!</Link>
        <Link to="/NoPage">Dark Mode</Link>
      </nav>
      <section>
        <button>Search all characters</button>
      </section>
    </div>
  );
}
