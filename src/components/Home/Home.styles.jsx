import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ProfileSection = styled.div`
  background-color: #1c7723; /* Color verde de cancha de fútbol */
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
`;

export const NextMatchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c7723; /* Color verde de cancha de fútbol */
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
`;

export const MatchInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin-right: 10px;
  }
`;
