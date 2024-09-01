import React, { useState, useEffect } from "react";

function AnalogClock() {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const updateClock = () => {
            setCurrentTime(new Date());
        };

        const timer = setInterval(updateClock, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = currentTime.getHours() % 12;
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hoursDegrees = hours * 30 + minutes / 2;
    const minutesDegrees = minutes * 6;
    const secondsDegrees = seconds * 6;

    const handStyle: React.CSSProperties = {
        position: "absolute",
        left: "50%",
        top: "50%",
        transformOrigin: "50% 100%", // Rotates around the center base of the hand
        backgroundColor: "black",
        borderRadius: "2px", // Round the edges of the hands
    };

    const clockStyle: React.CSSProperties = {
        position: "relative",
        width: "200px",
        height: "200px",
        border: "5px solid black",
        borderRadius: "50%",
        margin: "20px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div className="clock" style={clockStyle}>
            <div
                className="hour"
                style={{
                    ...handStyle,
                    width: "6px",
                    height: "50px",
                    transform: `translate(-50%, -100%) rotate(${hoursDegrees}deg)`,
                }}
            />
            <div
                className="minute"
                style={{
                    ...handStyle,
                    width: "4px",
                    height: "70px",
                    transform: `translate(-50%, -100%) rotate(${minutesDegrees}deg)`,
                }}
            />
            <div
                className="second"
                style={{
                    ...handStyle,
                    width: "2px",
                    height: "90px",
                    backgroundColor: "red",
                    transform: `translate(-50%, -100%) rotate(${secondsDegrees}deg)`,
                }}
            />
        </div>
    );
}

export default AnalogClock;
