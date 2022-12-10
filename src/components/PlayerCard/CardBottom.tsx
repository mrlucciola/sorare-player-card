// mui
import { Avatar, Divider, Stack, Unstable_Grid2 as Grid } from "@mui/material";
// components
import { TG } from ".";

type Props = React.FC<{
  age: number;
  firstName: string;
  lastName: string;
  position: string;
  country: { name: string; flagUrl: string };
}>;
/** Bottom portion of the player card
 */
const CardBottom: Props = ({ age, firstName, lastName, position, country }) => {
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
};
export default CardBottom;
