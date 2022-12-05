import { Home, HomePage } from "./Home";
import About from "./About";
const App = () => {
  return (
    <div>
      <p>Hello there</p>
      <Hello />
      <Home />
      <HomePage />
      <About />
    </div>
  );
};
export default App;

const Hello = () => {
  return <div>THis is hello comp</div>;
};
