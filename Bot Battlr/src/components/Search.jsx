import { useEffect, useState } from "react"
function Search() {
  const [query, setQuery] = useState("");
  useEffect(()=> {
    function demo() {
        console.log("Demo function executed")
    }
demo()
  }, [],)
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} 
      type="text"
      />
    </div>
  );
}
export default Search