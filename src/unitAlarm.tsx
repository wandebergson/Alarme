import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Clock from "./clock";

function UnitAlarm(){
 const [selectedTime, setSelectedTime] = useState(''); 
    const handleTimeChange = (event: any) => {
        setSelectedTime(event.target.value); 
    };

    const handleButtonClick = () => {
        alert(`Horário selecionado: ${selectedTime}`); 

        //função horario atual - horario escolhido aqui
    };
 return (
        <div>
  <label htmlFor="meeting-time">Escolha um horário para o alarme:</label>
            <br/>
            <input
                type="time"
                id="meeting-time"
                value={selectedTime}
                onChange={handleTimeChange}
            />
            <button onClick={handleButtonClick}>Horário</button>
            <p>Horário selecionado: {selectedTime}</p> {}
        </div>
    );
}

export default UnitAlarm;

