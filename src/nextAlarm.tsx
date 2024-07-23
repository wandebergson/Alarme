import React from "react";
import "./nextAlarm.css";
import { time } from "console";



function nextAlarm(){
    const currentDate: Date = new Date();
const hours: number = currentDate.getHours();
const minutes: number = currentDate.getMinutes();
const formattedTime: string = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    return(
        <div className="nextAlarm"> 
        <h1>{formattedTime}</h1>
        </div>
    );
}
export default nextAlarm;