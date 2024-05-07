import { useEffect, useState } from "react";
import "./Search.css";
const URL = "http://localhost:3000/bots";

function Search({ battlrData, setBattlrData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchBattlr() {
      const res = await fetch(`${URL} `);
      const data = await res.json();
      console.log(data);
      setBattlrData(data);
    }
    fetchBattlr();
  }, [query]);

  return (
    <div className="searchContainer">
      <input
      placeholder="search"
      className="enter"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
export default Search;
