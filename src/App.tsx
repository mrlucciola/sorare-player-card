// components
import Nav from "./components/Nav";
import Body from "./components/Body";

/** Top level component
 */
const App = () => {
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexFlow: "column",
      }}
    >
      <Nav />
      <Body />
    </div>
  );
};

export default App;
