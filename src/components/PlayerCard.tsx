import {
  Avatar,
  Unstable_Grid2 as Grid,
  Typography,
  Card,
  Stack,
  Box,
  CardMedia,
  Divider,
} from "@mui/material";
import { GridProps } from "@mui/system/Unstable_Grid";

const TG: React.FC<GridProps & { component?: React.ElementType }> = ({
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

function CardTop({
  season,
  displayRarity,
  teamImgUrl,
  shirtNumber,
}: {
  season: string;
  displayRarity: string;
  teamImgUrl: string;
  shirtNumber: number;
}) {
  const seasonFmt = season;

  return (
    <Box
      gridRow="1"
      display="grid"
      gridTemplateColumns="auto 1fr 1fr"
      width="inherit"
      maxWidth="inherit"
      textOverflow="clip"
      overflow="clip"
      whiteSpace="nowrap"
      paddingTop="3px"
      position="absolute"
    >
      <Stack
        gridColumn={1}
        justifyContent="start"
        alignItems="center"
        fontSize="0.8em"
        padding="10px"
      >
        {/* TODO: make smaller and thinner */}
        <TG fontSize="1em">{seasonFmt}</TG>
        <TG fontSize="1em" fontWeight={700}>
          {displayRarity}
        </TG>
      </Stack>
      <Stack gridColumn={-1} padding="10px">
        <Grid
          component={Avatar}
          src={teamImgUrl}
          sx={{ width: 24, height: 24 }}
        ></Grid>
        <TG padding={1}>{shirtNumber}</TG>
      </Stack>
    </Box>
  );
}

function CardBottom({
  age,
  firstName,
  lastName,
  position,
  country,
}: {
  age: number;
  firstName: string;
  lastName: string;
  position: string;
  country: { name: string; flagUrl: string };
}) {
  const countryUrl = country.flagUrl;
  const titleStyle = {
    fontSize: "0.7em",
  };

  return (
    <Stack
      gridRow="-2"
      direction="column"
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(50,50,50,1) 32%)",
      }}
      padding="5px"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Grid height="20px"></Grid>
      <Grid
        direction="column"
        color="white"
        justifyContent="center"
        alignItems="center"
        fontSize="1.5em"
        fontWeight={600}
        textAlign="center"
        width="100%"
        alignSelf="center"
      >
        <TG>{firstName}</TG>
        <TG>{lastName}</TG>
      </Grid>
      {/* lower 2/3 */}
      <Stack direction="row">
        <Stack
          direction="column"
          alignItems="center"
          fontSize="0.8em"
          gap="2px"
          padding="3px"
        >
          <TG sx={titleStyle}>Age</TG>
          <Divider
            sx={{ backgroundColor: "rgba(220,220,220,.2)" }}
            flexItem
            // variant="middle"
            orientation="horizontal"
          />
          <TG>{age}</TG>
        </Stack>

        <Divider
          sx={{ backgroundColor: "rgba(220,220,220,.2)" }}
          flexItem
          orientation="vertical"
        />

        <Stack
          gridArea="-2 / 2"
          flexDirection="column"
          alignItems="center"
          fontSize="0.8em"
          gap="2px"
          padding="3px"
        >
          <TG sx={titleStyle}>Position</TG>
          <Divider
            sx={{ backgroundColor: "rgba(220,220,220,.2)" }}
            flexItem
            // variant="middle"
            orientation="horizontal"
          />
          <TG>{position}</TG>
        </Stack>
        <Divider
          sx={{ backgroundColor: "rgba(220,220,220,.2)" }}
          flexItem
          orientation="vertical"
        />
        <Stack
          gridArea="-2 / 3"
          flexDirection="column"
          alignItems="center"
          fontSize="0.8em"
          gap="2px"
          padding="3px"
        >
          <TG sx={titleStyle}>Country</TG>
          <Grid component={Avatar} src={countryUrl} width="24px" height="24px">
            {country.name}
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
}
