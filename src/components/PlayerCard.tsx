import { Avatar, Grid, Typography } from "@mui/material";

export interface PlayerData {
  // background
  imageUrl: string;

  // top row: left
  season: string;
  rarity: string;
  // top row: right
  team: {
    imageUrl: string;
    name: string;
  };
  playerNumber: number;

  // lower half
  name: string;

  // lower 1/3
  age: number;
  position: string;
  country: {
    name: string;
    imageUrl: string;
  };
}

type Props = React.FC<{ playerData: PlayerData }>;
/** Displays the information for a single player.
 */
const PlayerCard: Props = ({
  playerData: {
    imageUrl,
    season,
    rarity,
    team,
    playerNumber,
    name,
    age,
    position,
    country,
  },
}) => {
  return (
    <Grid container flexDirection="column">
      {/* top */}
      <Grid container flexDirection="row">
        {/* top left */}
        <Grid container flexDirection="row">
          <Grid component={Typography}>{season}</Grid>
          <Grid component={Typography}>{rarity}</Grid>
        </Grid>
        {/* top right */}
        <Grid container flexDirection="row">
          <Grid component={Avatar}>{team.imageUrl}</Grid>
          <Grid component={Typography}>{playerNumber}</Grid>
        </Grid>
      </Grid>
      {/* bottom */}
      <Grid container flexDirection="column">
        {/* upper 1/3 - name */}
        <Grid container flexDirection="row">
          <Grid component={Typography}>{name}</Grid>
        </Grid>
        {/* lower 2/3 */}
        <Grid container flexDirection="row">
          <Grid container flexDirection="column">
            <Grid component={Typography}>Age</Grid>
            <Grid component={Typography}>{age}</Grid>
          </Grid>
          <Grid container flexDirection="column">
            <Grid component={Typography}>Position</Grid>
            <Grid component={Typography}>{position}</Grid>
          </Grid>
          <Grid container flexDirection="column">
            <Grid component={Typography}>Country</Grid>
            <Grid component={Avatar}>{position}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PlayerCard;
