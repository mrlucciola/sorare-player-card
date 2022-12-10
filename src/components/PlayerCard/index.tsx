// mui
import {
  Unstable_Grid2 as Grid,
  Typography,
  Card,
  Box,
  Skeleton,
  Fade,
  Collapse,
  Button,
  Container,
} from "@mui/material";
import { GridProps } from "@mui/system/Unstable_Grid";
import { useEffect, useRef, useState } from "react";
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
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const aspectRatio = 1.62;
  const width = 200;
  const height = width * aspectRatio;

  useEffect(() => {
    // @ts-ignore
    // imgRef.current.src = pictureUrl;
    const imgElem = new Image();
    imgElem.onload = () => {
      setIsImgLoading(false);
    };
    imgElem.src = pictureUrl;
  }, []);

  return (
    // <>
    <Box
      sx={{
        width,
        minWidth: width,
        maxWidth: width,
        height: height,
      }}
    >
      <Card
        position="absolute"
        display="grid"
        gridTemplateRows="20% auto 45%"
        sx={{
          width,
          minWidth: width,
          maxWidth: width,
          height: height,
          // top: 0,
          // left: 0,
          background:
            "linear-gradient(to bottom, rgba(194, 242, 242, 1) 14%, #ffffff 49%)",
        }}
        component={Box}
        raised
      >
        {/* {isImgLoading || isHidden ? (
        HiddenCard(width, height, setIsHidden)
      ) : (
        <Fade in={!isImgLoading && !isHidden} timeout={1000}></Fade>
      )} */}
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
        <CardTop
          season={season}
          displayRarity={displayRarity}
          teamImgUrl={activeClub.pictureUrl}
          shirtNumber={shirtNumber}
          isImgLoading={isImgLoading}
          isHidden={isHidden}
        />
        <CardBottom
          age={age}
          firstName={firstName}
          lastName={lastName}
          position={position}
          country={country}
          isImgLoading={isImgLoading}
          isHidden={isHidden}
        />
      </Card>
      {true && (
        <Fade
          in={isHidden}
          exit={!isHidden}
          timeout={{ appear: 0, enter: 0, exit: 1000 }}
        >
          {HiddenCard(width, height, setIsHidden)}
        </Fade>
      )}
    </Box>
  );
};

export default PlayerCard;

function HiddenCard(width: number, height: number, setIsHidden: any) {
  return (
    <Button
      sx={{
        minWidth: width,
        width,
        maxWidth: width,
        height,
        position: "absolute",
        zIndex: 1000,
        color: "black",
      }}
      onClick={() => setIsHidden(false)}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          bgcolor: "lightblue",
          minWidth: width,
          width,
          maxWidth: width,
          height,
        }}
        animation="wave"
      >
        Click to Reveal Player Card
      </Skeleton>
    </Button>
  );
}
