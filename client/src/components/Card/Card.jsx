import {
  CardContainer,
  ProfileInfoContainer,
  PictureAndBioContainer,
  ProfilePicture,
  Bio,
  GithubInfo,
  GithubUL,
  ListItem,
  ListItemContainer,
} from "./Card.styles";

const Card = (props) => {
  return (
    <CardContainer>
      <PictureAndBioContainer>
        <ProfilePicture
          src={props.children["avatar_url"]}
          alt="Profile"
        ></ProfilePicture>
        <Bio>{props.children.bio}</Bio>
      </PictureAndBioContainer>
      <ProfileInfoContainer>
        <GithubUL>
          <ListItemContainer>
            <ListItem>username</ListItem>
            <GithubInfo>{props.children.username}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>name</ListItem>
            <GithubInfo>{props.children.name}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>location</ListItem>
            <GithubInfo>{props.children.location}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>titles</ListItem>
            <GithubInfo>
              {props.children.titles.map((title) => title + " ")}
            </GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>fav language</ListItem>
            <GithubInfo>{props.children["favorite-language"]}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>stars</ListItem>
            <GithubInfo>{props.children["total-stars"]}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>highest stars</ListItem>
            <GithubInfo>{props.children["highest-starred"]}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>public repos</ListItem>
            <GithubInfo>{props.children["public-repos"]}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>perfect repos</ListItem>
            <GithubInfo>{props.children["perfect-repos"]}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>followers</ListItem>
            <GithubInfo>{props.children.followers}</GithubInfo>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>following</ListItem>
            <GithubInfo>{props.children.following}</GithubInfo>
          </ListItemContainer>
        </GithubUL>
      </ProfileInfoContainer>
    </CardContainer>
  );
};

export default Card;
