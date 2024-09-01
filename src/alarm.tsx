import react from "react";
import { useState } from "react";
import "./alarm.css"
 
import UnitAlarm from "./unitAlarm";
 

import Clock from "./clock";


function alarm(){
    return(
 <div className="alarmBody">
    
    
    {Clock()}
    {UnitAlarm()}
     
 </div>
    );
}
export default alarm;