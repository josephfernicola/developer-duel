import {
  HomeContainer,
  WelcomeTitle,
  InspectAndDuelButtonsContainer,
  Button,
  TitleAndButtonsContainer,
  ButtonDescription,
  ButtonAndSpanContainer,
  Line,
} from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <TitleAndButtonsContainer>
        <WelcomeTitle>Welcome to Dev-Duel</WelcomeTitle>
        <InspectAndDuelButtonsContainer>
          <ButtonAndSpanContainer>
            <Button to="/inspect" exact="true">
              Inspect
            </Button>
            <ButtonDescription>
              Look up a fellow dev's GitHub info.
            </ButtonDescription>
          </ButtonAndSpanContainer>
          <Line></Line>
          <ButtonAndSpanContainer>
            <Button to="/duel" exact="true">
              Duel
            </Button>
            <ButtonDescription>
              Pick two devs to go head to head.
            </ButtonDescription>
          </ButtonAndSpanContainer>
        </InspectAndDuelButtonsContainer>
      </TitleAndButtonsContainer>
    </HomeContainer>
  );
};

export default Home;
