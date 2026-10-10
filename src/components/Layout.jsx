import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app">
      <header className="navbar">
        <h2>Student Portal</h2>

        <nav>
          <NavLink to="/">Student List</NavLink>
          <NavLink to="/favourites">Favourites</NavLink>
        </nav>
      </header>

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;