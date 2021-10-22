import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import logo from '../../images/logo/logo_samsantech.png'; 

function Header() {
  return (
			<div>
				<header className="header">
					<NavLink to="/splash" tag={Link} className="logo">
						 <img src={logo} width={50} height={40} alt="logo" />
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
					<ul className="menu">
						<li>
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/add"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
							 CREATE
							</NavLink>
						</li>
					</ul>
				</header>
			</div>
	);
}
export default Header;

