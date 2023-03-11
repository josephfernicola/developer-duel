import styled from "styled-components";

export const DuelContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const Input = styled.input.attrs({ type: "text", autoComplete: "off" })`
  border: 1px solid rgba(0, 0, 0, 0.75);
  padding-left: 1rem;
  width: 30rem;
  height: 4rem;
  background: #e1f1ff;

  @media (max-width: 1200px) {
    height: 3rem;
    width: 20rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    height: 10rem;
    width: 100vw;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 100%;
  align-items: end;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Winner = styled.h1`
  color: #00ff38;
  @media (max-width: 1200px) {
    padding-right: 2rem;
    margin-top: 8rem;
  }
`;

export const WinnerAndCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Tie = styled.h1`
  color: #00ff38;
  text-align: center;
`;
