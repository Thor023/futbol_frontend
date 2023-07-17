import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1c7723; /* Color verde de cancha de fútbol */
  padding: 10px;
`;

export const LeftSection = styled.div`
  color: #fff;
  font-size: 16px;
`;

export const RightSection = styled.div`
  color: #fff;
  font-size: 16px;
`;

export const MenuIcon = styled.div`
  display: none; /* Ocultar el icono del menú en pantallas grandes */
  cursor: pointer;
  margin-right: 10px;

  @media (max-width: 768px) {
    display: block; /* Mostrar el icono del menú en pantallas pequeñas */
  }
`;

export const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    /* Mostrar el menú desplegable en pantallas pequeñas */
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: absolute;
    top: 50px;
    right: 10px;
    background-color: #1c7723;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 10px;
  }
`;

export const MenuItem = styled.li`
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
