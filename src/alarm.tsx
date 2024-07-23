import react from "react";
import { useState } from "react";
import controlAlarm from "./controlAlarm";


function alarm(){
    return(
 <div className="alarm">
    <h1>pagina alarmes aqui</h1>
    {controlAlarm()}
 </div>
    );
}
export default alarm;