import styled from "styled-components";

const FormContainer = styled.div`
  /* Estilos del contenedor del formulario */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  padding: 20px;
  max-width: 400px;
  background-color: #1c7723; /* Color verde de cancha de fútbol */
  border: 2px solid #2a2a2a; /* Borde gris oscuro */
  border-radius: 8px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff; /* Texto blanco */
    text-align: center; /* Centrar el título */
  }

  /* Estilos para los contenedores de los labels e inputs */
  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
  }

  label {
    color: #fff;
    font-size: 16px;
    margin-bottom: 6px;
    text-align: center; /* Centrar el label */
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    box-sizing: border-box; /* Asegura que el tamaño total del input se ajuste al 100% del ancho del contenedor */
  }

  button {
    padding: 10px 20px;
    background-color: #e50914; /* Rojo característico del fútbol */
    color: #fff; /* Texto blanco */
    font-size: 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default FormContainer;
