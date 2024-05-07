import React from "react";
import './Battlritem.css'
function Battlritem({ battlr }) {
  return (
    <div className="item">
      <img className="itemImage" src={battlr.avatar_url} alt="" />
     
      <h1> {battlr.name} </h1>
      <h4> {battlr.catchphrase} </h4>
      <h3> health {battlr.health} </h3>
     <h5> armor {battlr.armor} </h5>
     <h5> damage {battlr.damage} </h5>



      <button>view Robot</button>
    </div>
  );
}
export default Battlritem;
