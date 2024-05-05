import {useState} from "react"
import Search from "./components/Search"
import BattlrList from "./components/BattlrList";
import Nav from "./components/Nav";
import './App.css'
function App() {
  const [battlrData,setBattlrData]=useState([])
  return (
    <div className="App">
      <Nav />
      <Search battlrData={battlrData} setBattlrData={setBattlrData} />
      <BattlrList  battlrData={battlrData}/>
    </div>
  )
}

export default App;
