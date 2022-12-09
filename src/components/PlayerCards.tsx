import { useParams } from "react-router-dom";

type playerSlugsType = { playerSlugs: string };
type PlayerSlugsParams = Readonly<Partial<playerSlugsType>>;

const PlayerCards: React.FC = () => {
  // hooks
  const { playerSlugs: playerSlugsStr }: PlayerSlugsParams =
    useParams<playerSlugsType>();

  // Validate
  if (!playerSlugsStr) throw "Query param is undefined";

  // build query
  const playerSlugs: string[] = playerSlugsStr.split(",");
  const playerCardsQuery = playerSlugs.map((slug) => {});
  console.log("playerSlugs: ", playerSlugs);

  // get the player info
  // const playersData: PlayerData[] = fetch(playerCardsQuery);

  // build list of player cards

  return <div>Player Cards</div>;
};

export default PlayerCards;
