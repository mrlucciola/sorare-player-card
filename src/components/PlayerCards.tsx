// react
import { useState } from "react";
import { useParams } from "react-router-dom";
// graphql
import { useQuery, gql, QueryResult, OperationVariables } from "@apollo/client";
// mui
import { Grid } from "@mui/material";
// components
import PlayerCard, { PlayerData } from "./PlayerCard";

// fxns
const buildPlayersQuery = () => {
  return gql`
    query Playersx($slugs: [String!]) {
      cards(slugs: $slugs) {
        name
        player {
          activeClub {
            name
            pictureUrl
          }
          country {
            code
            flagUrl
          }
        }
        pictureUrl
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
  // state
  // const [playerDataArr, setPlayerData] = useState<PlayerData[]>();

  // Validate
  if (!playerSlugsStr) throw "Query param is undefined";

  // build query
  const playerSlugsArr: string[] = playerSlugsStr.split(",");

  const query: any = buildPlayersQuery();

  const {
    data,
    error,
    loading,
  }: QueryResult<PlayerDataPayload, OperationVariables> =
    useQuery<PlayerDataPayload>(query, {
      variables: {
        slugs: playerSlugsArr,
      },
    });
  const playerDataArr: PlayerData[] | undefined = data?.cards;
  // asdf.data?.cards;
  // const {
  //   loading,
  //   data,
  //   error,
  // }: QueryResult<PlayerDataPayload, { slugs: string[] }> = useQuery<PlayerDataPayload>(query, {
  //   variables: {
  //     slugs: playerSlugsArr,
  //   },
  // });

  if (error) {
    console.error("error", error);
  }

  // build list of player cards
  // const buildPlayerCardArr = (): React.FC<PlayerData>[] => {
  //   return [];
  // };
  const playerCardArr = playerDataArr?.map((playerData: PlayerData, idx) => {
    return <PlayerCard playerData={playerData} key={idx} />;
  });

  return <Grid>{!loading && playerCardArr}</Grid>;
};

export default PlayerCards;
