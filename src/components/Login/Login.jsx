import React from "react";
import FormContainer from "./Login.styles";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Aquí puedes redirigir a la página de registro
    navigate("/register");
  };

  return (
    <FormContainer>
      <h2>Iniciar sesión</h2>
      <div className="input-container">
        <label>Email:</label>
        <input type="email" placeholder="Ingrese su email" />
      </div>
      <div className="input-container">
        <label>Contraseña:</label>
        <input type="password" placeholder="Ingrese su contraseña" />
      </div>
      <button type="submit">Iniciar sesión</button>
      <button onClick={handleRegister}>Registrarse</button>
    </FormContainer>
  );
}
