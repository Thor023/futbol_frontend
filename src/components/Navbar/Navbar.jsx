import React, { useState } from "react";
import {
  NavbarContainer,
  LeftSection,
  RightSection,
  MenuIcon,
  MenuItems,
  MenuItem,
} from "./Navbar.styles";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <LeftSection>Bienvenido Usuario</LeftSection>
      <RightSection>
        <MenuIcon onClick={handleMenuIconClick}>
          ☰ {/* Icono de menú (puedes usar el que desees) */}
        </MenuIcon>
        <MenuItems isOpen={isMenuOpen}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </MenuItems>
      </RightSection>
    </NavbarContainer>
  );
}
