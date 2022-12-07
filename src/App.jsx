// rafce
import { useState } from "react";
import Products from "./Products";
// let count = 0;
// function increment() {
//   // count = count + 1;
//   // count ++;
//   count += 1;
// }
// hooks
// hooks are normal function
// hoook should be inside the main func
//
function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  console.log(username);
  const increment = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  //

  return (
    <div className="container">
      <h1>Day 4</h1>
      <p>{count}</p>
      <button onClick={increment}>count</button>
      {/* <button onClick={() => setCount(count + 1)}>count</button> */}
      {/* <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> */}

      {username}
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleChange}
      />
      <Products />
    </div>
  );
}

export default App;
