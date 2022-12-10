// mui
import {
  Avatar,
  Divider,
  Stack,
  StackProps,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import React from "react";
// components
import { TG } from ".";

const BottomRowItem: React.FC<
  StackProps & { component?: React.ElementType; title: string }
> = ({ title, ...p }) => (
  <Stack
    direction="column"
    alignItems="center"
    fontSize="0.8em"
    gap="2px"
    padding="3px"
    {...p}
  >
    <TG sx={{ fontSize: "0.7em" }}>{title}</TG>
    <Divider
      sx={{ backgroundColor: "rgba(220,220,220,.2)" }}
      flexItem
      orientation="horizontal"
    />
    {p.children}
  </Stack>
);

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

  return (
    <Stack
      gridRow="-2"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(50,50,50,1) 32%)",
      }}
      color="white"
    >
      <Grid height="20px"></Grid>
      <Grid
        direction="column"
        textAlign="center"
        color="white"
        fontSize="1.5em"
        fontWeight={600}
      >
        <TG>{firstName}</TG>
        <TG>{lastName}</TG>
      </Grid>
      {/* lower 2/3 */}
      <Stack
        direction="row"
        divider={
          <Divider
            sx={{ backgroundColor: "rgba(220,220,220,.2)", margin: "2px" }}
            flexItem
            orientation="vertical"
            variant="middle"
          />
        }
      >
        <BottomRowItem title="Age">
          <TG>{age}</TG>
        </BottomRowItem>
        <BottomRowItem title="Position">
          <TG>{position}</TG>
        </BottomRowItem>
        <BottomRowItem title="Country">
          <Grid component={Avatar} src={countryUrl} width="24px" height="24px">
            {country.name}
          </Grid>
        </BottomRowItem>
      </Stack>
    </Stack>
  );
};
export default CardBottom;
