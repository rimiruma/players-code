import { ToastContainer } from 'react-toastify';
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense, useState } from 'react'

const fetchPlayers = async () => {
  const res = await fetch('./players.json')
  return res.json();
}

const playersPromise = fetchPlayers();

function App() {


  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  // chouse plyer button
  const [purchasePlayers, setPurchasePlayers] = useState([]);
  // console.log(purchasePlayers);

  const removePlayer = (p) => {
    // console.log(p);
    const filterData = purchasePlayers.filter(player => player.player_Name !== p.player_Name)
    // console.log(filterData);
    setPurchasePlayers(filterData)
    setAvailableBalance(availableBalance + parseInt(p.price.split('$')[1]))


  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className='max-w-[1100px] mx-auto flex justify-between items-center'>
        <h3 className='text-2xl font-bold'>{
          toggle === true ? "Available players" : `Selected player(${purchasePlayers.length}/6)`
        }</h3>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 border-1 px-4 border-gray-400 btn rounded-l-2xl border-r-0 ${toggle === true ? 'bg-[#E7FE29]' : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 border-1 px-4 border-gray-400 btn rounded-r-2xl border-l-0 ${toggle === false ? 'bg-[#E7FE29]' : ""}`}>Selected <span>({purchasePlayers.length})</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <AvailablePlayers purchasePlayers={purchasePlayers} setPurchasePlayers={setPurchasePlayers} availableBalance={availableBalance} playersPromise={playersPromise} setAvailableBalance={setAvailableBalance}></AvailablePlayers>
        </Suspense> : <SelectedPlayers removePlayer={removePlayer} purchasePlayers={purchasePlayers}></SelectedPlayers>
      }

      <ToastContainer />
    </>
  )
}

export default App
