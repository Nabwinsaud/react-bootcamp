// import { useState } from "react";
import { useState } from "react";

const Home = () => {
  const [usernmae, setUsername] = useState("");
  const [isVerified] = useState(true);
  //   function changeUsername() {
  //     setUsername("john");
  //   }
  const changeUsername = () => {
    setUsername("ram");
  };
  return (
    <div>
      <p>username is {usernmae} </p>
      {isVerified && <h1>user is verified</h1>}
      {/* {isVerified ? "verified" : ""} */}
      <button onClick={changeUsername}>update Name</button>
    </div>
  );
};

export default Home;
