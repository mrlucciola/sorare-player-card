// react
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// mui
import { Grid } from "@mui/material";
// components
import PlayerCard, { PlayerData } from "./PlayerCard";

type playerSlugsType = { playerSlugs: string };
type PlayerSlugsParams = Readonly<Partial<playerSlugsType>>;

const fetchPlayerData = async (
  query: string,
  setPlayerData: React.Dispatch<React.SetStateAction<PlayerData[] | undefined>>
) => {
  console.log('query', query)
  const playerDataRes = await fetch("http://localhost:8080/graphql/marco-verratti-2021-unique-");

  console.log("player data return:\n", playerDataRes);
  const newPlayerData: PlayerData[] = [];

  setPlayerData(newPlayerData);
};
const PlayerCards: React.FC = () => {
  // hooks
  const { playerSlugs: playerSlugsStr }: PlayerSlugsParams =
    useParams<playerSlugsType>();
  // state
  const [playerDataArr, setPlayerData] = useState<PlayerData[]>();

  // Validate
  if (!playerSlugsStr) throw "Query param is undefined";

  // build query
  const playerSlugs: string[] = playerSlugsStr.split(",");
  const playersJoinedStr = playerSlugs.map((slug) => {}).join();
  const playerCardsQuery = `${playersJoinedStr}`;
  // PlayerData[]
  console.log("playerSlugs: ", playerSlugs);
  console.log("playersJoinedStr: ", playersJoinedStr);
  console.log("playerCardsQuery: ", playerCardsQuery);

  // build list of player cards
  const buildPlayerCardArr = (): React.FC<PlayerData>[] => {
    return [];
  };
  const playerCardArr = playerDataArr?.map((playerData: PlayerData, idx) => {
    return <PlayerCard playerData={playerData} />;
  });

  useEffect(() => {
    // retrieve player info from the query in the search box
    fetchPlayerData(playerCardsQuery, setPlayerData);

    // cleanup
    return () => setPlayerData([]);
  }, []);
  return <Grid>{playerCardArr}</Grid>;
};

export default PlayerCards;
