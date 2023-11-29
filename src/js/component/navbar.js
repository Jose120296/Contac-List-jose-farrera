import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<Link to="/">
				<i className="fa-solid fa-address-book fa-2xl"></i>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
