import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Atualiza o estado da hora a cada segundo
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []); // O array vazio assegura que o efeito só é rodado uma vez, após a montagem inicial

  // Formata a hora para exibição
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Hora atual:</h1>
      <h2>{formattedTime}</h2>
    </div>
  );
};

export default Clock;