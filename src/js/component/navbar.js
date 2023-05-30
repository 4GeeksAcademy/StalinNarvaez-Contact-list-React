import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light d-flex justify-content-end">
			<div className="ml-auto ">
				<Link to="/demo">
					<button type="button" className="btn btn-success m-2">Agregar Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
