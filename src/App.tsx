import { useState, useEffect, useMemo } from 'react'
import { MainGrid } from './components/MainGrid'
import { feedTileSet, Tile } from './logic/map.ts'
//import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const mapInitialValue = useMemo(() => feedTileSet(120),[])
  const [map, setMap] = useState<Tile[]>(mapInitialValue)

  useEffect(() => {
    console.log(map)
  },[map])


  return (
    <>
     {map && <MainGrid data={map} />}
    </>
  )
}

export default App
