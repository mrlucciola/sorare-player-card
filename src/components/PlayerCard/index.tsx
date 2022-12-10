// mui
import {
  Unstable_Grid2 as Grid,
  Typography,
  Card,
  Box,
  Skeleton,
  Fade,
} from "@mui/material";
import { GridProps } from "@mui/system/Unstable_Grid";
import { useEffect, useState } from "react";
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
  const [isImgLoading, setIsImgLoading] = useState<boolean>(true);
  const width = 200;
  const aspectRatio = 1.62;
  const height = width * aspectRatio;

  useEffect(() => {
    const imgElem = new Image();
    imgElem.onload = () => {
      setIsImgLoading(false);
    };
    imgElem.src = pictureUrl;
  }, []);

  return (
    <Card
      display="grid"
      gridTemplateRows="20% auto 45%"
      sx={{
        width,
        minWidth: width,
        maxWidth: width,
        height: height,
        background:
          "linear-gradient(to bottom, rgba(194, 242, 242, 1) 14%, #ffffff 49%)",
      }}
      component={Box}
      raised
    >
      <Fade in={isImgLoading}>
        <Skeleton
          variant="rectangular"
          sx={{
            minWidth: width,
            width,
            maxWidth: width,
            height,
            position: "absolute",
          }}
        ></Skeleton>
      </Fade>
      <Fade in={!isImgLoading}>
        <img
          style={{
            marginTop: "20%",
            minWidth: "120%",
            maxWidth: "120%",
            width: "120%",
            justifySelf: "center",
            zIndex: 0,
          }}
          src={pictureUrl}
          loading="lazy"
        />
      </Fade>
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
