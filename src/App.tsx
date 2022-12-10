// components
import Nav from "./components/Nav";
import Body from "./components/Body";
// mui
import { Container, Grid, Stack } from "@mui/material";

/** Top level component
 */
const App = () => {
  return (
    <Stack
      className="App"
      component={Container}
      direction="column"
      sx={{
        height: "100vh",
        minHeight: "100vh",
        maxHeight: "100vh",
        width: "100vw",
        maxWidth: "100vw",
        minWidth: "100vw",
      }}
    >
      <Nav />
      <Body />
    </Stack>
  );
};

export default App;
