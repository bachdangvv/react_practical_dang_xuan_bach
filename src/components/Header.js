import React from "react";

export default function Header() {
  return (
    <header className="container header">
      <div className="logo">
        <img src="image/logo.png" alt="logo" style={{ height: 34 }} />
        FPT Aptech
      </div>
      <nav className="nav">
        <a href="#about">About Us</a>
        <a href="#products">Products</a>
        <a href="#booking">Booking</a>
        <a href="#locations">Locations</a>
        <button className="btn">Sign In</button>
        <button className="btn primary">Sign Up</button>
      </nav>
    </header>
  );
}