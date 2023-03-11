import {
  DuelContainer,
  Input,
  InputContainer,
  CardsContainer,
  Winner,
  WinnerAndCardContainer,
  Tie,
} from "./Duel.styles";
import { Button } from "../Home/Home.styles";
import { useState } from "react";
import { duelUsers } from "../../services/userService";
import Card from "../../components/Card/Card";
import Error from "../../components/Error/Error";

const Duel = () => {
  const [userOne, setUserOne] = useState("");
  const [userTwo, setUserTwo] = useState("");
  const [userOneData, setUserOneData] = useState("");
  const [userTwoData, setUserTwoData] = useState("");
  const [winner1, setWinner1] = useState(false);
  const [winner2, setWinner2] = useState(false);
  const [winnerText, setWinnerText] = useState("");
  const [toggleDisplay, setToggleDisplay] = useState(false);
  const [error, setError] = useState(false);

  const getData = async () => {
    const result = await duelUsers(userOne, userTwo);
    if (result.message === undefined) {
      setUserOneData(result[0]);
      setUserTwoData(result[1]);
      determineWinner(result[0], result[1]);
      setError(false);
    } else {
      setError(true);
    }
  };
  const determineWinner = (user1, user2) => {
    let score1 = 0;
    let score2 = 0;

    score1 += user1["public-repos"];
    score1 += user1["perfect-repos"] * 2;
    score1 += user1.titles.length * 2;
    score1 += user1["total-stars"] * 1.5;
    score1 += user1.followers;

    score2 += user2["public-repos"];
    score2 += user2["perfect-repos"] * 2;
    score2 += user2.titles.length * 2;
    score2 += user2["total-stars"] * 1.5;
    score2 += user2.followers;

    if (score1 > score2) {
      setWinner1(true);
      setWinner2(false);
      setWinnerText("Winner!!!");
    } else if (score2 > score1) {
      setWinner1(false);
      setWinner2(true);
      setWinnerText("Winner!!!");
    } else {
      setWinner2(false);
      setWinner1(false);
      setWinnerText("Tie!");
    }
    setToggleDisplay(true);
  };

  return (
    <DuelContainer>
      <InputContainer>
        <Input onChange={(e) => setUserOne(e.target.value)}></Input>
        <Input onChange={(e) => setUserTwo(e.target.value)}></Input>
      </InputContainer>
      <Button onClick={() => getData(userOne, userTwo)}>Duel</Button>
      {error && <Error></Error>}
      {toggleDisplay && (
        <CardsContainer>
          <WinnerAndCardContainer>
            {winner1 && winner1 ? <Winner>{winnerText}</Winner> : null}
            <Card>{userOneData}</Card>
          </WinnerAndCardContainer>
          {winnerText && !winner1 && !winner2 ? <Tie>{winnerText}</Tie> : null}
          <WinnerAndCardContainer>
            {winner2 && winner2 ? <Winner>{winnerText}</Winner> : null}
            <Card>{userTwoData}</Card>
          </WinnerAndCardContainer>
        </CardsContainer>
      )}
    </DuelContainer>
  );
};

export default Duel;
