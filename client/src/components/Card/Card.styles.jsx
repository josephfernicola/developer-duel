import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
  width: 55rem;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  margin-top: 2rem;
  @media (max-width: 500px) {
    width: 40rem;
  }
`;

export const PictureAndBioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20rem;
  width: 30rem;
  margin-left: 2rem;
  text-align: center;
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.img`
  clip-path: circle();
  height: 8rem;
  width: 8rem;
`;

export const Bio = styled.div``;

export const GithubInfo = styled.span`
  padding-left: 3rem;
`;

export const GithubUL = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  font-size: 1.1rem;
`;

export const ListItem = styled.div`
  text-align: center;
  vertical-align: middle;
  border: 1px solid black;
  background-color: #e1f1ff;
  box-sizing: border-box;
  width: 10rem;
  border-radius: 5px;
`;

export const ListItemContainer = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.8rem;
`;
