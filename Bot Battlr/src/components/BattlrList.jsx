import React from "react"
import Battlritem from "./Battlritem";
 function BattlrList({battlrData}) {
  return (
    <div>
      {" "}
      {battlrData.map((battlr) => (
        <Battlritem key={battlr.id} battlr={battlr} />
      ))}
    </div>
  );
}
export default BattlrList