
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense } from 'react'

const fetchPlayers = async () => {
  const res = await fetch('./players.json')
  return res.json();
}

function App() {

  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App
