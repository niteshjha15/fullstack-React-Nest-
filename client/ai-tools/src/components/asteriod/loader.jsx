import React from "react";
import style from "./asteriod.module.css";
import { SiStarship } from "react-icons/si";

function Loader() {
  return (
    <div className={style.loader}>
      <SiStarship size={100} color='blue'/>
      <h4>Getting Fun Facts...</h4>
    </div>
  );
}

export default Loader;
