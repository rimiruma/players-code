import React from 'react';

const SelectedCard = ({player, removePlayer}) => {
    // console.log(player);

    const handleRemove = ()=> {
        removePlayer(player)
    }
    
    return (
        <div className=''>
            <div className='border-2 mt-5 border-gray-300 rounded-xl p-5 flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-[50px] h-[50px] rounded-xl' src={player.player_Image} alt="" />
                    <div className='ml-2'>
                        <h1>{player.player_Name}</h1>
                        <p>{player.batting_Style}</p>
                    </div>
                </div>
                <div>
                  <button className='btn' onClick={handleRemove}> <img className='w-5' src="https://i.ibb.co.com/XxJjXhzK/delete-1.png" alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;