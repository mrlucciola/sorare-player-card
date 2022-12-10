// components
import Nav from "./components/Nav";
import Body from "./components/Body";
// mui
import { Container, Grid } from "@mui/material";

/** Top level component
 */
const App = () => {
  return (
    <Grid
      className="App"
      container
      direction="column"
      component={Container}
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
    </Grid>
  );
};

export default App;
