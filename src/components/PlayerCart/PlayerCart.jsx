import userImg from '../../assets/user-1.png'
import flagImg from '../../assets/flag-1.png'
import { useState } from 'react';

const PlayerCart = ({ player, setAvailableBalance, availableBalance, purchasePlayers, setPurchasePlayers }) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleSelected = (playerData) => {
        console.log(playerData);
        
        const playerPrice = parseInt(playerData.price.split('$')[1])
        if(availableBalance < playerPrice){
            alert("Not enough coins!!")
            return
        }
        setIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice)
        setPurchasePlayers([...purchasePlayers, playerData])
    }

    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm">
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
                        <p className="font-bold">Price:{player.price}</p>
                        <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCart;