// mui
import {
  Box,
  Avatar,
  Stack,
  Unstable_Grid2 as Grid,
  Divider,
} from "@mui/material";
// components
import { TG } from ".";

const rarityColorMapObj = {
  unique: { text: "gold", border: "gold" },
  super_rare: { text: "purple", border: "purple" },
  rare: { text: "rgb(255, 231, 231)", border: "red" },
  limited: { text: "yellow", border: "yellow" },
  common: { text: "green", border: "green" },
  custom_series: { text: "black", border: "black" },
};
const rarityColorMap = new Map<string, { text: string; border: string }>(
  Object.entries(rarityColorMapObj)
);

type Props = React.FC<{
  season: string;
  displayRarity: string;
  teamImgUrl: string;
  shirtNumber: number;
}>;
/** Top portion of the player card.
 */
const CardTop: Props = ({ season, displayRarity, teamImgUrl, shirtNumber }) => {
  const seasonFmt = season;
  const rarityColor = rarityColorMap.get(displayRarity.toLowerCase());

  return (
    <Box
      gridRow="1"
      display="grid"
      gridTemplateColumns="auto 1fr 1fr"
      position="absolute"
      paddingTop="3px"
      width="inherit"
      maxWidth="inherit"
      textOverflow="clip"
      whiteSpace="nowrap"
    >
      <Stack
        gridColumn={1}
        justifyContent="start"
        alignItems="center"
        fontSize="0.7em"
        padding=".5em"
        color={rarityColor?.text}
      >
        <Stack
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            shadow: "0 0 50px 50px rgba(0,0,0,1)",
            borderRadius: "5px",
            padding: "5px",
            border: `4px solid ${rarityColor?.border}`,
          }}
          alignItems="center"
        >
          <TG>{seasonFmt}</TG>
          <Divider flexItem sx={{ background: rarityColor?.border }} />
          <TG fontWeight={700}>{displayRarity}</TG>
        </Stack>
      </Stack>
      <Stack gridColumn={-1} padding="7px" alignItems="center">
        <Grid
          component={Avatar}
          src={teamImgUrl}
          sx={{ width: "35px", height: "35px" }}
        ></Grid>
        <TG
          padding={1}
          color="rgba(128,128,128,0.5)"
          sx={{
            textShadow: "0 0 1px rgba(128,128,128,0.5)",
          }}
          fontWeight={700}
          fontSize="1.4em"
        >
          #{shirtNumber}
        </TG>
      </Stack>
    </Box>
  );
};

export default CardTop;
