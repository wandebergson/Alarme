import react from "react";
import { useState } from "react";
import "./alarm.css"
import controlAlarm from "./controlAlarm";

function alarm(){
    return(
 <div className="alarm">
    <div className="logo"></div>

    {controlAlarm()}
 </div>
    );
}
export default alarm;