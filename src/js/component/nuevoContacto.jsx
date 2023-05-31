import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevoContacto = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      nombre,
      correo,
      telefono,
      direccion,
    };

    fetch("https://assets.breatheco.de/apis/fake/contact/agenda/StalinN", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta de la API:", data);
        setNombre("");
        setCorreo("");
        setTelefono("");
        setDireccion("");
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  };

  return (
    <div className="contain-fluid mt-5">
      <form onSubmit={handleSubmit}>
        <h2 className="titulo text-center">Agregar un nuevo contacto</h2>
        <div className="input mt-1">
          <h5 className="input-text text-start">Nombre Completo</h5>
          <input
            type="text"
            value={nombre}
            aria-label="Full name"
            className="form-control"
            placeholder="Escriba su nombre"
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div className="mb-3 input mt-1">
          <h5 className="input-text text-start">Email</h5>
          <input
            type="email"
            value={correo}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Escriba su email"
            onChange={(event) => setCorreo(event.target.value)}
          />
        </div>
        <div className="input mt-1">
          <h5 className="input-text text-start">Teléfono</h5>
          <input
            type="tel"
            value={telefono}
            aria-label="phone"
            className="form-control"
            placeholder="Escriba su número de teléfono"
            onChange={(event) => setTelefono(event.target.value)}
          />
        </div>
        <div className="input mt-1">
          <h5 className="input-text text-start">Dirección</h5>
          <input
            type="text"
            value={direccion}
            aria-label="Address"
            className="form-control"
            placeholder="Escriba su dirección"
            onChange={(event) => setDireccion(event.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary mt-3">
            Guardar
          </button>
        </div>
        <p className="text-start fs-6">
          <Link to="/">Regresar a lista de contactos</Link>
        </p>
      </form>
    </div>
  );
};

export default NuevoContacto;
