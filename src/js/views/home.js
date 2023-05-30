import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import Contacto from "../component/contacto.js";

export const Home = () => (
	<div className="text-center mt-5">
		<Navbar/>
		<Contacto/>
	</div>
);
