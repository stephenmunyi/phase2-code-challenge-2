import { useEffect, useState } from "react"
const URL = "http://localhost:3000/bots"

function Search({battlrData,setBattlrData}) {
  const [query, setQuery] = useState("");
  useEffect(()=> {
   
        async function fetchBattlr
        (){
            
            const res= await fetch(`${URL} `)
            const data= await res.json () 
            console.log(data)
            setBattlrData(data)
          }
           fetchBattlr()
      },[query],)
 
    

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} 
      type="text"
      />
    </div>
  )
}
export default Search