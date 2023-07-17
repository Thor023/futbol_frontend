import React, { useState } from "react";
import FormContainer from "./RegisterForm.styles";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Los datos se enviaron correctamente al backend
        console.log("Datos enviados al backend");
      } else {
        // Ocurrió un error al enviar los datos al backend
        console.log("Error al enviar los datos al backend");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginClick = () => {
    // Aquí puedes redireccionar a la página de login
    navigate("/login");
  };

  return (
    <FormContainer>
      <h2>Registro</h2>
      <div className="input-container">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingrese su nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          placeholder="Ingrese su apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-container">
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese su contraseña"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Registrarse
      </button>
      <button onClick={handleLoginClick}>Volver a Login</button>
    </FormContainer>
  );
}
