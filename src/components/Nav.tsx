// mui
import { Grid } from "@mui/material";

type Props = React.FC<{}>;
/** Navigation bar
 */
const Nav: Props = () => {
  return (
    <Grid container direction="row" flex="0 1" justifyContent="space-between">
      <div style={{ display: "flex" }}>Sorare</div>
      <div style={{ display: "flex", width: "80%" }}></div>
      Nav
    </Grid>
  );
};

export default Nav;
