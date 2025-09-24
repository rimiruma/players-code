import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasePlayers, removePlayer}) => {
    console.log(purchasePlayers);
    
    return (
        <div className='max-w-[1100px] mx-auto'>
            {
                purchasePlayers.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;