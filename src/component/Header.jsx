import React from "react";
import ExitBtn from "./ExitBtn";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <Nav />
      <h2>Admin Panel</h2>
      <ExitBtn />
    </header>
  );
}

export default Header;
