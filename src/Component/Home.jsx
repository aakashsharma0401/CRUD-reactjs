import React from "react";
import "../Style/Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homes">
      <header class="header">
        <nav class="navbar">
          <h2 class="logo">
<Link to={"/"} >Expenses</Link>
          </h2>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" id="hamburger-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </label>
          <ul class="links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/showExp"}>All-Expenses</Link>
            </li>
            <li>
              <Link to={"/addexp"}>Add-Expenses</Link>
            </li>
            <li>
              <Link href="/ ">Contact Us</Link>
            </li>
          </ul>
      
        </nav>
      </header>
      <section class="hero-section">
        <div class="hero">
          <h2>Expenses</h2>
        <p>See The All Expenses</p>
          <div class="buttons">
           <Link to={"/showExp"}>All Expenses</Link>
           
          </div>
        </div>
        <div class="img">
          <img
            src="https://www.codingnepalweb.com/demos/create-responsive-website-html-css/hero-bg.png"
            alt="hero image"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
