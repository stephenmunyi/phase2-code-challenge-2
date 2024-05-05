import {useState} from "react"
import Search from "./components/Search"
import BattlrList from "./components/BattlrList";

function App() {
  const [battlrData,setBattlrData]=useState([])
  return (
    <div className="App">
      
      <Search battlrData={battlrData} setBattlrData={setBattlrData} />
      <BattlrList  battlrData={battlrData}/>
    </div>
  )
}

export default App;
