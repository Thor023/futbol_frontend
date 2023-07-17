import React from "react";
import {
  HomeContainer,
  ProfileSection,
  NextMatchSection,
  MatchInfo,
} from "./Home.styles";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  // Información del perfil (puedes modificar o agregar más datos según tus necesidades)
  const profileInfo = {
    name: "Nombre de Usuario",
    age: 25,
    team: "Equipo Favorito",
    country: "País",
  };

  // Información del próximo partido (puedes modificar o agregar más datos según tus necesidades)
  const nextMatchInfo = {
    date: "Fecha del Partido",
    opponent: "Equipo Rival",
    location: "Lugar del Partido",
  };

  return (
    <>
    <Navbar />
    <HomeContainer>
      <ProfileSection>
        <h2>Perfil</h2>
        <p>Nombre: {profileInfo.name}</p>
        <p>Edad: {profileInfo.age}</p>
        <p>Equipo: {profileInfo.team}</p>
        <p>País: {profileInfo.country}</p>
      </ProfileSection>
      <NextMatchSection>
        <h2>Próximo Partido</h2>
        <MatchInfo>
          <span>Fecha: {nextMatchInfo.date}</span>
          <span>Rival: {nextMatchInfo.opponent}</span>
        </MatchInfo>
        <p>Lugar: {nextMatchInfo.location}</p>
      </NextMatchSection>
    </HomeContainer>
    </>
  );
}
