import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeContainer = styled.main`
  height: 80vh;
`;

export const TitleAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
`;

export const WelcomeTitle = styled.h1`
  text-align: center;
  margin: 8rem;
`;

export const InspectAndDuelButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  background-color: white;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  color: black;
  width: 20rem;
  border-radius: 1rem;
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e5e5e5;
    transform: traslateY(-3rem);
  }
  display: block;
  margin-top: 2rem;
`;

export const ButtonDescription = styled.span`
  width: 80%;
`;

export const ButtonAndSpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Line = styled.div`
  border-left: 3px solid black;
  margin-left: 5rem;
  margin-right: 5rem;
  @media (max-width: 600px) {
    display: block;
    height: 1px;
    border: 0;
    border-top: 3px solid black;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;
