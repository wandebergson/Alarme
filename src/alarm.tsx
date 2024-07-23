import react from "react";
import { useState } from "react";
import "./alarm.css"
import controlAlarm from "./controlAlarm";

import Clock from "./clock";


function alarm(){
    return(
 <div className="alarm">
    <div className="logo"></div>
    
    {Clock()}
    
    {controlAlarm()}
 </div>
    );
}
export default alarm;