import React, { useState } from 'react';
import { useEffect } from 'react';

function UnitAlarm() {
    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (event: any) => { //não sei como tipar isso
        setSelectedTime(event.target.value);
    };

    const handleButtonClick = () => {
        if (!selectedTime) return;


        const currentTime = new Date();
        const [hours, minutes] = selectedTime.split(':');


        const alarmTime = new Date();
        alarmTime.setHours(parseInt(hours));
        alarmTime.setMinutes(parseInt(minutes));
        alarmTime.setSeconds(0);


        let timeDifference = alarmTime.getTime() - currentTime.getTime();


        if (timeDifference < 0) {
            timeDifference += 24 * 60 * 60 * 1000;  
        }


        setTimeout(() => {
            alert(`O alarme está tocando! Horário escolhido foi: ${selectedTime}`);
        }, timeDifference);
        
        
    };

    
    

    return (
        <div className='confgAlarm'>



            <label  htmlFor="meeting-time">horário para o alarme:</label>
            <br />
            <input 
                
                type="time"
                id="meeting-time"
                value={selectedTime}
                onChange={handleTimeChange}
            />
            <button onClick={handleButtonClick}>Definir Alarme</button>
            <p>Horário selecionado: {selectedTime}</p>
            <p>Próximo alarme em: {"timer entre agora e o alarme"}</p>        
        </div>
    );
}

export default UnitAlarm;
