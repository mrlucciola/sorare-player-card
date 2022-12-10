// mui
import {
  Unstable_Grid2 as Grid,
  Typography,
  Card,
  Box,
  CardMedia,
} from "@mui/material";
import { GridProps } from "@mui/system/Unstable_Grid";
// cpmponents
import CardBottom from "./CardBottom";
import CardTop from "./CardTop";

export const TG: React.FC<GridProps & { component?: React.ElementType }> = ({
  ...p
}) => <Grid component={Typography} {...p} />;

export interface PlayerData {
  // top row: left
  season: { name: string };
  displayRarity: string;
  // top row: right
  player: {
    displayName: string;
    firstName: string;
    lastName: string;
    // background
    pictureUrl: string;
    activeClub: {
      name: string;
      pictureUrl: string;
    };
    country: {
      name: string;
      code: string;
      flagUrl: string;
    };
  };
  shirtNumber: number;

  // lower 1/3
  age: number;
  position: string;
}

type Props = React.FC<{ playerData: PlayerData }>;
/** Displays the information for a single player.
 */
const PlayerCard: Props = ({
  playerData: {
    season: { name: season },
    displayRarity,
    player: { pictureUrl, activeClub, country, firstName, lastName },
    shirtNumber,
    age,
    position,
  },
}) => {
  // separate the name out

  return (
    <Card
      display="grid"
      // padding={1}
      gridTemplateRows="20% auto 45%"
      sx={{
        width: 200,
        height: 324,
        background:
          "linear-gradient(to bottom, rgba(194, 242, 242, 1) 14%, #ffffff 49%)",
      }}
      component={Box}
      // sx={{background:}}
      raised
    >
      <CardMedia
        component="img"
        alt={`${firstName} ${lastName}`}
        image={pictureUrl}
        sx={{ marginTop: "20%", minWidth: "120%", justifySelf: "center" }}
      />
      {/* top */}
      <CardTop
        season={season}
        displayRarity={displayRarity}
        teamImgUrl={activeClub.pictureUrl}
        shirtNumber={shirtNumber}
      />
      {/* bottom */}
      <CardBottom
        age={age}
        firstName={firstName}
        lastName={lastName}
        position={position}
        country={country}
      />
    </Card>
  );
};

export default PlayerCard;
