import react from "react";
import { useState } from "react";
import "./alarm.css"
import controlAlarm from "./controlAlarm";
import nextAlarm from "./nextAlarm";

function alarm(){
    return(
 <div className="alarm">
    <div className="logo"></div>
    
    {nextAlarm()}

    {controlAlarm()}
 </div>
    );
}
export default alarm;