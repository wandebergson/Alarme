import react from "react";
import { useState } from "react";
import "./alarm.css"
 
import UnitAlarm from "./unitAlarm";
 

import Clock from "./clock";


function alarm(){
    return(
 <div className="alarm">
    <div className="logo"></div>
    
    {Clock()}
    {UnitAlarm()}
     
 </div>
    );
}
export default alarm;