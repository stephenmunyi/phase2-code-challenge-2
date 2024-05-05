import React from "react";
function Battlritem({ battlr }) {
  return (
    <div>
      <img src={battlr.avatar_url} alt="" />
      <h1>{battlr.name}</h1>
      <button>view Robot</button>
    </div>
  );
}
export default Battlritem;
