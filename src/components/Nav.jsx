import React from "react";
export default function Nav() {
    return (
        <nav className="navigation">
            <ul className="nav__list">
                <li className="nav__item">
                    <a className="nav__link" href="/">
                        Home
          </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/blog">
                        Blog
          </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/product">
                        Product
          </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="/contact">
                        Contact
          </a>
                </li>
            </ul>
        </nav>
    );
}
