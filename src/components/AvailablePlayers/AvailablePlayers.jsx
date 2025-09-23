import { use } from "react";
import userImg from '../../assets/user-1.png'
import flagImg from '../../assets/flag-1.png'

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  // const {player_Image, player_Name, player_Country, player_Role, rating, batting_Style, bowling_Style, price} = playerData;
  console.log(playerData);

  return (
    <div className="mt-10 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 max-w-[1100px] mx-auto">
      {
        playerData.map(player => <div className="card bg-base-100 shadow-sm">
        <figure>
          <img className="w-full h-[200px] object-cover"
            src={player.player_Image}
            alt="Shoes" />
        </figure>
        <div className="mt-4">
          <div className="flex">
            <img className="w-5" src={userImg} alt="" />
            <h2 className="card-title ml-2">{player.player_Name}</h2>
            </div>
            <div className="flex justify-between mt-2 border-b-1 border-b-gray-300 pb-2">
              <div className="flex items-center">
                <img className="w-10" src={flagImg} alt="" />
                <span>{player.player_Country}</span>
              </div>
              <button className="btn">{player.player_Role}</button>
            </div>
            <div className="flex justify-between font-bold">
              <span>Rating</span>
              <span>{player.rating}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className=" font-bold">{player.batting_Style}</span>
              <span>{player.bowling_Style}</span>
            </div>
          
          <div className="card-actions mt-3 justify-between items-center">
            <p className="font-bold">Price: ${player.price}</p>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>)
      }
      
    </div>
  );
};

export default AvailablePlayers;