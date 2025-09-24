import { use } from "react";

import PlayerCart from "../PlayerCart/PlayerCart";

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance,purchasePlayers, setPurchasePlayers }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

  return (
    <div className="mt-10 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 max-w-[1100px] mx-auto">
      {
        playerData.map(player => <PlayerCart purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCart>)
      }
      
    </div>
  );
};

export default AvailablePlayers;