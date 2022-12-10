// react
import { useParams } from "react-router-dom";
// graphql
import { useQuery, gql, QueryResult, OperationVariables } from "@apollo/client";
// mui
import { Container, Paper, Stack, Unstable_Grid2 as Grid } from "@mui/material";
// components
import PlayerCard, { PlayerData } from "./PlayerCard";

// fxns
const buildPlayersQuery = () => {
  return gql`
    query Playersx($slugs: [String!]) {
      cards(slugs: $slugs) {
        name
        player {
          displayName
          firstName
          lastName
          pictureUrl
          activeClub {
            name
            pictureUrl
          }
          country {
            code
            flagUrl
          }
        }
        displayRarity
        shirtNumber
        age
        position
        season {
          id
          startYear
          name
        }
      }
    }
  `;
};

interface PlayerDataPayload {
  cards: PlayerData[];
}
type playerSlugsType = { playerSlugs: string };
type PlayerSlugsParams = Readonly<Partial<playerSlugsType>>;
/** View and list component for displaying player cards
 */
const PlayerCards: React.FC = () => {
  // hooks
  const { playerSlugs: playerSlugsStr }: PlayerSlugsParams =
    useParams<playerSlugsType>();

  // Validate
  if (!playerSlugsStr) throw "Query param is undefined";

  // build query
  const playerSlugsArr: string[] = playerSlugsStr.split(",");

  const query: any = buildPlayersQuery();

  const { data, error }: QueryResult<PlayerDataPayload, OperationVariables> =
    useQuery<PlayerDataPayload>(query, {
      variables: {
        slugs: playerSlugsArr,
      },
    });
  const playerDataArr: PlayerData[] | undefined = data?.cards;

  if (error) {
    console.error("error", error);
  }

  // build list of player cards
  const playerCardArr = playerDataArr?.map((playerData: PlayerData, idx) => {
    return <PlayerCard playerData={playerData} key={idx} />;
  });

  return (
    <Paper component={Container}>
      <Stack direction="row" rowGap="10px" columnGap="10px" flexWrap="wrap">
        {playerCardArr}
      </Stack>
    </Paper>
  );
};

export default PlayerCards;
