import { InspectContainer, Input } from "./Inspect.styles";
import { Button } from "../Home/Home.styles";
import { useState } from "react";
import { inspectUser } from "../../services/userService";
import Card from "../../components/Card/Card";
import Error from "../../components/Error/Error";

const Inspect = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState("");
  const [toggleDisplay, setToggleDisplay] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    const result = await inspectUser(username);
    console.log(result);
    if (result.message === undefined) {
      setUserData(result);
      setToggleDisplay(true);
      setError(false);
    } else {
      setError(true);
      setToggleDisplay(false);
    }
  };

  return (
    <InspectContainer>
      <Input onChange={(e) => setUsername(e.target.value)} />
      <Button onClick={() => getData(username)}>Inspect</Button>
      {error && <Error></Error>}
      {toggleDisplay && <Card>{userData}</Card>}
    </InspectContainer>
  );
};

export default Inspect;
