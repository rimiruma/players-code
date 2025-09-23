import { use } from "react";


const AvailablePlayers = ({playersPromise}) => {
    const playerData = use(playersPromise);
    console.log(playerData);
    
    return (
        <div>
          AvailablePlayers  
        </div>
    );
};

export default AvailablePlayers;