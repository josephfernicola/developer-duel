const inspectUserUrl = "http://localhost:8080/api/user/";
const duelUsersUrl = "http://localhost:8080/api/users?";

export const inspectUser = async (username = "andrew") => {
  // await response of fetch call
  let response = await fetch(inspectUserUrl + username);
  // only proceed once promise is resolved

  let data = await response.json();
  return data;

  // only proceed once second promise is resolved
};

export const duelUsers = async (user1 = "fabpot", user2 = "andrew") => {
  // await response of fetch call
  let response = await fetch(
    duelUsersUrl + `username=${user1}&username=${user2}`
  );
  // only proceed once promise is resolved
  let data = await response.json();
  console.log(data);
  // only proceed once second promise is resolved
  return data;
};
