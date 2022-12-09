// mui
import { Grid } from "@mui/material";

/** Navigation bar
 */
const Nav: React.FC = () => {
  return (
    <Grid container direction="row" flex="0 1" justifyContent="space-between">
      <div style={{ display: "flex" }}>Sorare</div>
      <div style={{ display: "flex", width: "80%" }}></div>
      Nav
    </Grid>
  );
};

export default Nav;
