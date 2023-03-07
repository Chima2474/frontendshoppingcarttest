import React from "react";
import "./Headerstyle.css";

type Props = {};

const navLinks: string[] = ["Home", "Aboout", "Product", "Cart"];

const index = (props: Props) => {
  return (
    <section className="header">
      <div className="navbar">
        {navLinks.map((item) => (
          <li key={item} className="navLinks">
            <a href="#" className="navLink">
              {item}
            </a>
          </li>
        ))}
      </div>
    </section>
  );
};

export default index;
