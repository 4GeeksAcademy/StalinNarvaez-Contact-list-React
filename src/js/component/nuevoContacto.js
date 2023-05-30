import React, { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";

const NuevoContacto = () => {
	return (
		<div className="contain-fluid mt-5">
			<h2 className="titulo text-center">Agregar un nuevo contacto</h2>
			<div className="input mt-1">
				<h5 className="input-text text-start">Nombre Completo</h5>
				<input type="text" aria-label="Full name" className="form-control" placeholder="Escriba su nombre"/>
			</div>
			<div className="mb-3 input mt-1">
				<h5 className="input-text text-start">Email</h5>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escriba su email"/>
			</div>
			<div className="input mt-1">
				<h5 className="input-text text-start">Teléfono</h5>
				<input type="tel" aria-label="phone" className="form-control" placeholder="Escriba su número de teléfono"/>
			</div>
			<div className="input mt-1">
				<h5 className="input-text text-start">Dirección</h5>
				<input type="text" aria-label="Address" className="form-control" placeholder="Escriba su dirección"/>
			</div>
			<div className="d-grid gap-2">
				<button className="btn btn-primary mt-3" type="button">Guardar</button>
			</div>
			<p className="text-start fs-6">
				<Link to="/">Regresar a lista de contactos</Link>
			</p>
		</div>
	);
};

export default NuevoContacto